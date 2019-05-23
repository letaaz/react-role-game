enum RoleType {
  Archery = 'Archery',
  Warrior = 'Warrior',
  Healer = 'Healer',
  Assassin = 'Assassin'
}

export const getRoleTypeFromHeroClass = (heroClass: string) => {
  switch (heroClass) {
    case 'Archery':
      return RoleType.Archery;
    case 'Warrior':
      return RoleType.Warrior;
    case 'Healer':
      return RoleType.Healer;
    default:
      return RoleType.Assassin;
  }
};

export default RoleType;
