import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Category = {
  name: string;
  slug: string;
  count: number;
  items: Omit<Category, 'items'>[];
};

export const getCategories = cache((): Category[] => [
  {
    name: 'Über uns',
    slug: 'ueberUns',
    count: 11,
    items: [
      { name: 'Geschichte', slug: 'phones', count: 4 },
      { name: 'Team', slug: 'tablets', count: 5 },
      //{ name: 'Laptops', slug: 'laptops', count: 2 },
    ],
  },
  {
    name: 'Drinks & Snacks',
    slug: 'drinksSnacks',
    count: 12,
    items: [
      { name: 'Biere', slug: 'biere', count: 3 },
      { name: 'Weine', slug: 'weine', count: 4 },
      { name: 'Kurze', slug: 'kurze', count: 4 },
      { name: 'Snacks', slug: 'snacks', count: 5 },
    ],
  },
  {
    name: 'Sportarena',
    slug: 'sportarena',
    count: 10,
    items: [
      { name: 'Live', slug: 'live', count: 5 },
      { name: 'SC Freiburg', slug: 'scfreiburg', count: 2 },
      { name: 'Bundesliga', slug: 'bundesliga', count: 3 },
    ],
  },
  {
    name: 'Events',
    slug: 'events',
    count: 10,
    items: [
      { name: 'Live-Musik', slug: 'live', count: 5 },
      { name: 'Dein Event', slug: 'deinEvent', count: 2 },
      
    ],
  },
  {
    name: 'Wohin?',
    slug: 'kontakt',
    count: 10,
    items: [
      { name: 'Lageplan', slug: 'lageplan', count: 5 },
      { name: 'OpenStreet', slug: 'openstreet', count: 2 },
    ],
  },
]);

export async function fetchCategoryBySlug(slug: string | undefined) {
  // Assuming it always return expected categories
  return getCategories().find((category) => category.slug === slug);
}

export async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}

async function findSubCategory(
  category: Category | undefined,
  subCategorySlug: string | undefined,
) {
  return category?.items.find((category) => category.slug === subCategorySlug);
}

export async function fetchSubCategory(
  categorySlug: string | undefined,
  subCategorySlug: string | undefined,
) {
  const category = await fetchCategoryBySlug(categorySlug);
  return findSubCategory(category, subCategorySlug);
}
