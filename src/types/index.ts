export type Cities = {
  id: number;
  name: string;
  tours: Tour[];
};

export type Tour = {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
};