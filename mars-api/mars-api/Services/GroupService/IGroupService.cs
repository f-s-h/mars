using mars_api.Data.DTO.Groups;
using mars_api.Data.DTO.Users;

namespace mars_api.Services.GroupService
{
    public interface IGroupService
    {
        public ICollection<GroupDTO> GetAllGroups();
        public ICollection<GroupDTO> GetAllGroupsDetail();
        public GroupDTO? GetGroupById(Guid id);
        public GroupDTO? CreateGroup(GroupDTO groupDTO);
        public void AssignUserToGroup(Guid groupId, Guid userId);
        public ICollection<UserDTO> GetGroupUsersById(Guid id);
        public void UpdateGroup(GroupDTO groupDTO);
    }
}
