const host = process.env.REACT_APP_API_URL;

export const fetchNoToken = async (endpoint, data, method) => {
  const url = `${host}/${endpoint}`;

  if (method === "GET") {
    const response = await fetch(url);
    return await response.json();
  } else {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
};
