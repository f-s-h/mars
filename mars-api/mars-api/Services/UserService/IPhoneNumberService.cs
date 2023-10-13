﻿using mars_api.Data.DTO.Users;

namespace mars_api.Services.UserService
{
    public interface IPhoneNumberService
    {
        public ICollection<PhoneNumberDTO> GetAllPhoneNumbers();
        public PhoneNumberDTO? GetPhoneNumberById(Guid phoneNumberId);
        public ICollection<PhoneNumberDTO> GetPhoneNumbersForUserId(Guid userId);
        public PhoneNumberDTO CreatePhoneNumber(PhoneNumberDTO phoneNumberDTO);

    }
}
