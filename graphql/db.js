export const people = [
  {
    id: "1",
    name: "ShimHyeokJin1",
    age: 28,
    gender: "man"
  },
  {
    id: "2",
    name: "ShimHyeokJin2",
    age: 29,
    gender: "man"
  },
  {
    id: "3",
    name: "ShimHyeokJin3",
    age: 30,
    gender: "woman"
  },
  {
    id: "4",
    name: "ShimHyeokJin4",
    age: 32,
    gender: "man"
  },
  {
    id: "5",
    name: "ShimHyeokJin5",
    age: 35,
    gender: "woman"
  },
]

export const getById = (id) => {
  const filteredPeople = people.filter((person) => String(id) === person.id);
  return filteredPeople[0];
}