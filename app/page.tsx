import AddPharmacyPromo from "./components/AddPharmacyPromo/AddPharmacyPromo";
import MainBanner from "./components/MainBanner/MainBanner";
import MedicineStores from "./components/MedicineStores/MedicineStores";
import PromoBanners from "./components/PromoBanners/PromoBanners";
import Reviews from "./components/Reviews/Reviews";
import css from "./page.module.css";

export default async function Home () {

  return (
    <div className={css.home}>
      <MainBanner/>
      <PromoBanners/>
      <MedicineStores/>
      <AddPharmacyPromo/>
      <Reviews/>
    </div>
  );
}
