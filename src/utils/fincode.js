import { useMemo, useState } from "react";

export const useFincodeHooks = () => {
  const [fincode, setFincode] = useState();
  const ui = useMemo(() => {
    if (fincode === undefined) return undefined;
    const _ui = fincode.ui({ layout: "vertical" });
    _ui.create("payments", { layout: "vertical" });
    _ui.mount("fincode", "400");
    return _ui;
  }, [fincode]);

  const [token, setToken] = useState();

  const mountUI = () => {
    setTimeout(() => {
      const _fincode = Fincode(
        "p_test_YzhhNGE3MTEtYmRhMy00ZGYxLTlkMzQtOTAyZjE0ZTA4NWQ4YjY3ZmRlYWUtYTYyYi00ODc0LTkyZjAtYTc2OWMwY2RmOGE0c18yMzA0MjA1NzM3Mw"
      );
      setFincode(_fincode);
    }, 100);
  };

  const submit = (event) => {
    event.preventDefault();
    ui.getFormData().then((result) => {
      console.log(result);
      generateToken({
        card_no: result.cardNo,
        expire: result.expire,
        holder_name: result.holderName,
        security_code: result.CVC,
        method: result.method,
        pay_times: result.payTimes,
        number: 2,
      });
    });
    return false;
  };

  const generateToken = (card) => {
    const id = localStorage.getItem("fincode-id");
    const accessId = localStorage.getItem("fincode-access-id");

    fincode.tokens(
      card,
      function (status, response) {
        if (status === 200) {
          console.log("success", response);
          setToken(response.list[0].token);
          const transaction = {
            pay_type: "Card",
            access_id: accessId,
            id: id,
            card_no: card.card_no,
            expire: card.expire,
            method: card.method,
            pay_times: card.pay_times,
            security_code: card.security_code,
            holder_name: card.holder_name,
          };
          console.log(transaction);
          sendTransaction(transaction);
        } else {
          console.log("error", response);
        }
      },
      function (e) {
        console.log("connection error", e);
      }
    );
  };

  const sendTransaction = (transaction) => {
    fincode.payments(
      transaction,
      function (status, response) {
        if (status === 200) {
          console.log("payment success", response);
        } else {
          console.log("payment error", response);
        }
      },
      function (e) {
        console.log("payment connection error", e);
      }
    );
  };

  const payment = (amount) => {
    return fetch("https://api.test.fincode.jp/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer m_test_MjY5MTRlYWYtMTY2Zi00N2U2LTg4MzItODYxOThmZGFkOTFlMTkyNjRhODMtYzhmYy00MWYwLWJiMDMtYjFiNDcxZjhhNWY2c18yMzA0MjA1NzM3Mw",
      },
      body: JSON.stringify({
        pay_type: "Card",
        job_code: "CAPTURE",
        amount: amount,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Networt response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // Use data here
        console.log("payment", data);
        localStorage.setItem("fincode-id", data.id);
        localStorage.setItem("fincode-access-id", data.access_id);
      })
      .catch((err) => {
        console.log("payment", err);
      });
  };

  return {
    mountUI,
    submit,
    payment,
  };
};
