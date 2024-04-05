using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace cms.app.ContentManagements
{
    public class CreateOrUpdateContentManagementDto
    {
        [Required]
        [MaxLength(50)]
        public string Title { get; set; }
        public string Slug => Title.Replace(" ", "-");

        [Required]
        [MaxLength(10000)]
        public string Description { get; set; }


    }
}
