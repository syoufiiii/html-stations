async function getData() {
  const userList = [
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

  // 3秒遅らせる非同期処理を実行
  const result = await test(userList);

  // フルネームをHTMLに表示
  displayResult(result);
}

function test(userList) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fullNames = userList.map(
        (user) => `${user.family_name} ${user.first_name}`,
      );
      resolve(fullNames);
    }, 3000);
  });
}

function displayResult(fullNames) {
  const resultElement = document.getElementById("result");

  // 前回の結果をクリアする
  resultElement.innerHTML = "";

  // 新しい結果を表示する
  fullNames.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    resultElement.appendChild(li);
  });
}

// ページ読み込み時にgetData()を呼び出す
window.onload = getData;
