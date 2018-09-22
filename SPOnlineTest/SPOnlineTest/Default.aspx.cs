
using System;
using Newtonsoft.Json;
using System.Text;
using System.Web.UI;
using System.Security;
using System.Configuration;
using System.Net;
using System.IO;
using Microsoft.SharePoint.Client;

namespace SPOnlineTest
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

           var credentials = new SharePointOnlineCredentials(ConfigurationManager.AppSettings["UserName"].ToString(), GetSecureString(ConfigurationManager.AppSettings["Password"].ToString()));

            try
            {
                string url = String.Format("{0}/_api/projectdata/Timesheets?$format=json", ConfigurationManager.AppSettings["PWASiteURL"].ToString());
                var req = (HttpWebRequest)WebRequest.Create(url);
                req.Credentials = credentials;
                req.Headers["X-FORMS_BASED_AUTH_ACCEPTED"] = "f";

                var resp = (HttpWebResponse)req.GetResponse();
                var receiveStream = resp.GetResponseStream();

                var readStream = new StreamReader(receiveStream, Encoding.UTF8);

                var data = readStream.ReadToEnd();

                RetrieveMultipleResponse result = JsonConvert.DeserializeObject<RetrieveMultipleResponse>(data);
                gvPOLData.DataSource = result.value;
                gvPOLData.DataBind();
            }
            catch(Exception ex)
            {
                string s = ex.Message;

            }

        }
        private static SecureString GetSecureString(string input)
        {
            SecureString passWord = new SecureString();
            foreach (char c in input.ToCharArray()) passWord.AppendChar(c);
            return passWord;
        }

    }
}
