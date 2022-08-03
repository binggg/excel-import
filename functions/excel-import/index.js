const fetch = require("node-fetch");
const XLSX = require("xlsx");

async function main(event) {
    console.log("云函数参数", event);
    // 获取文件，url 可以替换为自己的文件地址
    const url =
        "https://weda-prod-1258344699.cos.ap-shanghai.myqcloud.com/excel_template/excel_file/%E7%A4%BA%E4%BE%8B.xlsx";
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    // 读 XLSX 内容
    const excel = new XLSX.read(buffer);
    // 默认读取第一个 sheet
    const firstSheetName = excel.SheetNames[0];
    const firstSheet = excel.Sheets[firstSheetName];
    // 将第一个sheet 读取为json，对象的key 为表头的内容
    const jsonData =
        XLSX.utils.sheet_to_json(firstSheet, {
            defval: "", // default value for empty cells
            header: 0, // 标题行，默认从 0 开始
            blankrows: false, // 不读取空白行
        }) || []; // 带有数据类型的对象数组 [{a: 1}，
    
    console.log(jsonData)

    // todo
    // 分批导入数据
    const MAX_LENGTH = 100; // 假设最大条数为 100
    while (jsonData.length > 0) {
        const data = jsonData.slice(0, MAX_LENGTH);
        jsonData.splice(0, MAX_LENGTH);
        console.log('导入数据', data)
        // todo
        // 处理并导入分批的数据
    }
    // return jsonData;
}

exports.main = main;

// 不在云函数环境时，如在本地时自动执行
if (!process.env.TENCENTCLOUD_RUNENV) {
    main();
}
