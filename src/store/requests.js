import axios from "axios";

export async function getProductsPagination({ data, token }) {
  try {
    const res = await axios({
      method: "get",
      url: `https://{subdomin}.ox-sys.com/variations`,
      data,
      header: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function authRequestToServer({ user, subdomain }) {
  try {
    const res = await axios({
      method: "post",
      url: `https://${subdomain}.ox-sys.com/security/auth_check`,
      data: {
        ...user,
        _subdomain: subdomain,
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
}
