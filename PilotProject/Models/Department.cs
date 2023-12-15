using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace PilotProject.Models
{
    public class Department
    {
        
        public int DepartmentId { get; set; }

      
        public string DepartmentName { get; set; }
    }
}
