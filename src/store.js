import { writable } from 'svelte/store';

export const rows = writable([
    ["Albert", "Smith", "50"],
    ["Paula", "Geller", "45"],
    ["Ana", "Jones", "46"],
    ["Monica", "Brown", "48"],
    ["Emma", "Taylor", "51"],
    ["Robert", "Green", "52"],
  ]);