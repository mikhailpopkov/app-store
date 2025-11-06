import Banner from "./components/shared/banner"
import CategoriesList from "./components/shared/categories-list";

export default function Home() {
  return (
    <>
      <Banner date = '5/7'
      time = '7 a.m. PT.'
      title = 'Apple Event'/>
      <div className="b-categories">
          <CategoriesList items={[{
            id: 1,
            title: "iPhone",
            text: "tewssdt",
            img: 'a'
          }]}/>
      </div>
    </>
  )
}