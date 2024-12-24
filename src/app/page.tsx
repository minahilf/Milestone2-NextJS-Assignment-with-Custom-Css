import Main from "./Main/page";
import Welcome from "./Welcome/page";
import Value from "./Value/page";
import Product from "./Product/page";
import Collection from "./Collection/page";
import Sale from "./Sale/page";
import Articles from "./Article/page";

export default function Home() {
  return (
   <>
   <Main/>
   <Welcome/>
   <Value/>
   <Product/>
   <Collection/>
   <Sale/>
   <Articles/>
   </>
  );
}
