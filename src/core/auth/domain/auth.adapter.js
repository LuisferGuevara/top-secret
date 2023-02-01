const authAdapter = (user = {}) => {
  return {
    name: user?.name,
    lastName: user?.lastName,
    email: user?.email,
    role: user?.role,
  };
};

export default authAdapter;