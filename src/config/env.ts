const serverList = [
  {
    // 与脚本 env 中保持一致
    PORT: 5000,
    serverName: '本机测试环境',
  },
];

export const CurrentENV = serverList.find((serverItem) => {
  const BACKEND_SERVER_NAME =
    process.env.BACKEND_SERVER_NAME || '本地环境localhost';
  return BACKEND_SERVER_NAME === serverItem.serverName;
});
