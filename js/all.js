// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ

const table = document.querySelector('.table-content');
const url = 'https://hexschool.github.io/js-filter-data/data.json';
let data;

function renderData(item) {
  let str = '';
  item.forEach((i) => {
    const content = `
    <tr>
      <td> 
        ${i.作物名稱}
      </td>
      <td>
        ${i.市場名稱} 
      </td>
      <td>
        ${i.上價} 
      </td>
      <td>
        ${i.中價}
      </td>
      <td>
        ${i.下價} 
      </td>
      <td>
        ${i.平均價}
      </td>
      <td>
        ${i.交易量}
      </td>
    </tr>
    `;
    str += content;
  });
  table.innerHTML = str;
}

axios(url)
  .then((res) => {
    data = res.data.filter((a) => a.作物名稱);
    renderData(data);
  })
  .catch((error) => console.log(error));

let category = '';
const filter = document.querySelector('.filter');

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    let showData = [];
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
    // TODO: 之後拆成 renderData 函式
    renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);
