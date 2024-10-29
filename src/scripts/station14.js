function getData() {
  const test = [
    {
      id: 1,
      first_name: "優",
      family_name: "大木",
      affiliation: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affiliation: "HogeHoge大学",
      is_student: true,
    },
  ];

  return test.map(buildFullName); // full_nameを追加したオブジェクトの配列を返す
}

function buildFullName(data) {
  return {
    ...data,
    full_name: `${data.family_name} ${data.first_name}`, // 苗字と名前の結合
  };
}

// HTMLにフルネームを表示する関数
function displayFullNames() {
  const data = getData(); // full_name を持つデータを取得
  const resultList = document.getElementById("result"); // <ul>要素を取得

  data.forEach((person) => {
    const listItem = document.createElement("li"); // <li>を生成
    listItem.innerText = person.full_name; // フルネームをセット
    resultList.appendChild(listItem); // <ul>に追加
  });
}

// ページがロードされたときに displayFullNames() を実行
window.addEventListener("DOMContentLoaded", displayFullNames);
