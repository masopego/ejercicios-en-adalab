'use strcit';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const getPremium = (user) => {
  let content;
  if (user.isPremium) {
    content = `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
  } else {
    content = `Bienvenida ${user.name}`;
  }
  return content;
};

const premiumUsers = users.map(getPremium);
console.log(premiumUsers);
