using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPOnlineTest
{
    public class RetrieveMultipleResponse
    {
        public List<POLTimeSheetDataLine> value { get; set; }
       
    }
    public class POLTimeSheetDataLine
    {
        public string TimesheetId { get; set; }
        public string Comment { get; set; }

        public string Description { get; set; }

        public string EndDate { get; set; }

        public string ModifiedDate { get; set; }

        public string PeriodId { get; set; }
        public string PeriodName { get; set; }

        public string PeriodStatusId { get; set; }

        public string StartDate { get; set; }
        public string StatusDescription { get; set; }
        public string TimesheetName { get; set; }

        public string TimesheetOwner { get; set; }

        public string TimesheetOwnerId { get; set; }

        public string TimesheetStatusId { get; set; }

    }
}

