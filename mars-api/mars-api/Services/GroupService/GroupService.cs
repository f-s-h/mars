using mars_api.Context;
using mars_api.Data.DTO.Groups;
using mars_api.Data.DTO.Users;
using mars_api.Data.Models.Groups;
using mars_api.Data.Models.Users;
using mars_api.Services.UserService;
using Microsoft.EntityFrameworkCore;

namespace mars_api.Services.GroupService
{
    public class GroupService : IGroupService
    {
        private readonly MarsContext context;

        public GroupService(MarsContext context) { 
            this.context = context;
        }

        public GroupDTO? CreateGroup(GroupDTO groupDTO)
        {
            Guid id = Guid.NewGuid();
            groupDTO.Id = id;
            Group group = groupDTO.AsModel();
            context.Groups.Add(group);
            context.SaveChanges();

            return groupDTO;
        }

        public ICollection<GroupDTO> GetAllGroups()
        {
            return context.Groups
                .Select(g => g.AsDTO())
                .ToList();
        }

        public ICollection<GroupDTO> GetAllGroupsDetail()
        {
            return context.Groups
                .Include(g => g.Users)
                .Select(g => g.AsDTO())
                .ToList();
        }

        public GroupDTO? GetGroupById(Guid id)
        {
            return context.Groups
                .Include(g => g.Users)
                .Where(g => g.Id.Equals(id))
                .Select(g => g.AsDTO())
                .FirstOrDefault();
        }

        public void AssignUserToGroup(Guid groupId, Guid userId)
        {
            var group = context.Groups.Include(g => g.Users)
                    .Where(g => g.Id.Equals(groupId))
                    .FirstOrDefault();

            var user = context.Users.Where(u => u.Id.Equals(userId)).FirstOrDefault();

            if(user != null && group != null)
            {
                group.Users.Add(user);
                context.SaveChanges();
            }
        }

        public ICollection<UserDTO> GetGroupUsersById(Guid id)
        {
            var group = context.Groups
                .Include(g => g.Users)
                .Where(g => g.Id.Equals(id))
                .FirstOrDefault();

            var users = group?.Users.Select(u => u.AsDTO()).ToList();
            
            if(users == null)
            {
                return new List<UserDTO> ();
            }

            return users;
        }

        public void UpdateGroup(GroupDTO groupDTO)
        {
            context.Update(groupDTO.AsModel());
            context.SaveChanges();
        }
    }
}
