export const regex = {
  names: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
  password: /^.{6,16}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  title: /^[a-zA-ZÀ-ÿ-:.,0-9\s]{2,45}$/,
  year: /^(19|20)\d{2}$/,
  plot: /^[a-zA-ZÀ-ÿ-':.,0-9\s]{10,255}$/m,
  poster: /(https?:\/\/.*\.(?:png|jpg))/i,
}
