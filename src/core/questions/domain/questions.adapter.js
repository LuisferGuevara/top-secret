const usersAdapter = (user = {}) => ({
  id: user._id || '',
  name: user.name || '',
  lastName: user.surname || '',
  email: user.email || '',
  phone: user.phone || "",
  tickets: user.tickets || 0,
  type: user.type || '',
  entity: user.entity || '',
  DNI: user.DNI || '',
  web: user.web || '',
  registeredNewsLetter: user.registeredNewsLetter || false,
  registeredApp: user.registeredApp || false,
  notes: user.notes || '',
});

export default usersAdapter;