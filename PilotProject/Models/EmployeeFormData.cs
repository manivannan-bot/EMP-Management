namespace PilotProject.Models
{
    class EmployeeFormData
    {
        public string employeeId { get; set; }
        public string name { get; set; }
        public string gender { get; set; }
        public DateTime? dob { get; set; }
        public int departmentId { get; set; }
        public DateTime? hiredDate { get; set; }
    }
}
