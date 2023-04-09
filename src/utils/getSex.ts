export default function getSex(woman: boolean | undefined, male: boolean | undefined) {
  return male ? 'male' : woman ? 'woman' : 'other';
}
