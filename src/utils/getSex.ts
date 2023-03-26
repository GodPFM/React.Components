export default function getSex(male: boolean | undefined, woman: boolean | undefined) {
  return male ? 'male' : woman ? 'woman' : 'other';
}
