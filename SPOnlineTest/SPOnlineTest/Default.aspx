<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SPOnlineTest._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron">
        <h1>TEST POL</h1>
    </div>

    <div class="row">
        <asp:GridView ID="gvPOLData" runat="server"></asp:GridView>
    </div>

</asp:Content>
