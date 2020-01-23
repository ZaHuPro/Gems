const errorMsg = {
    tokenExpired: 'Login Expired, Please login another time',
    invalidToken: 'Invalid Login Token, Please login another time',
    validName: 'Plesse enter valid name',
    validEmail: 'Please enter valid email!',
    validPhone: 'Please enter valid phone number!',
    validPassword: 'Please enter the password (min lenght:8 and max length:20)',
    validDescription: 'Please enter valid description (min lenght:5 and max length:100)',
    validStartDate: 'Please enter valid start date',
    validEndDate: 'Please enter valid end date',
    worngPassword: 'Password does not matching',
    worngEmail: 'Email ID does not match',
    validJWT: 'Invalid JWT token',
    authFailed: 'User authentication error',
    validEvent: 'Event is not exist or not created by you',
    notRoleAdmin: 'Only admin has permission for this not user',
    notRoleUser: 'Only user has permission for this not admin',
    existEmail: 'Email ID already registed',
    validSortType: 'Invalid Sort type, it must be ASC or DESC',
    validSortBy: 'Sort by should be valid parameter, it must be (id, name, description, start_date, end_date)',
};

export default errorMsg;
