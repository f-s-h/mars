namespace mars_api.Data.DTO.Groups
{
    public class GroupDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<GroupDTO> Groups { get; set; } = new List<GroupDTO>();
    }
}