enum WeaponType {
  CROSSBOW = 'CROSSBOW',
  SWORD = 'SWORD',
  LEGENDARY_SPEAR = 'LEGENDARY_SPEAR',
  MAGIC_WAND = 'MAGIC_WAND',
  POISON = 'POISON',
  CLAW = 'CLAW',
  DAGGER = 'DAGGER'
}

// namespace WeaponType {
//   export function stringValue(weapon: WeaponType) {
//     switch (weapon) {
//       case WeaponType.CLAW:
//         return 'CLAW';
//       case WeaponType.SWORD:
//         return 'SWORD';
//       case WeaponType.MAGIC_WAND:
//         return 'MAGIC_WAND';
//       case WeaponType.POISON:
//         return 'POISON';
//       case WeaponType.LEGENDARY_SPEAR:
//         return 'LEGENDARY_SPEAR';
//       case WeaponType.DAGGER:
//         return 'DAGGER';
//       default:
//         'CLAW';
//     }
//   }
// }

export const getWeaponTypeFromString = (weaponName: string) => {
  switch (weaponName) {
    case 'CROSSBOW':
      return WeaponType.CROSSBOW;
    case 'SWORD':
      return WeaponType.SWORD;
    case 'MAGIC_WAND':
      return WeaponType.MAGIC_WAND;
    case 'POISON':
      return WeaponType.POISON;
    case 'LEGENDARY_SWORD':
      return WeaponType.LEGENDARY_SPEAR;
    case 'DAGGER':
      return WeaponType.DAGGER;
    default:
      return WeaponType.CLAW;
  }
};

export default WeaponType;
