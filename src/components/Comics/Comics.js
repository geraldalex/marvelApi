import {
  API_URL,
  URL_COMICS,
  IMG_STADDARD_XLARGE,
  IMG_NOT_AVAILABLE,
} from "../../constans/api";
import { getDataApi } from "../../utils/getDataApi";
import "./Comics.css";
import { ROOT_INDEX, ROOT_MODEL } from "../../constans/root";

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);

    let htmlContent = "";
    data.forEach(({ id, title, thumbnail: { path, extension } }) => {
      if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
        const imgSrc = path + "/" + IMG_STADDARD_XLARGE + "." + extension;

        htmlContent += `
                <li class="comics__item">
    <span class="comics__name">${title}</span>
    <img class="comics__img" src="${imgSrc}"/>
                </li>
                `;
      }
    });

    const htmlWrapper = `
<ul class="comics__container">
${htmlContent}
</ul>
`;
    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Comics();
