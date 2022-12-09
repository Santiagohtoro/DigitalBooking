const initials = (user) => {
  let name = user?.user?.name;
  let surname = user?.user?.surname;
  let firstLetterName = name.slice(0, 1);
  let firstLetterSurname = surname.slice(0, 1);
  return firstLetterName, firstLetterSurname;
};

export default initials;
