let fincode;

let ui;

export const mountUI = () => {
  fincode = Fincode(
    "p_test_YzhhNGE3MTEtYmRhMy00ZGYxLTlkMzQtOTAyZjE0ZTA4NWQ4YjY3ZmRlYWUtYTYyYi00ODc0LTkyZjAtYTc2OWMwY2RmOGE0c18yMzA0MjA1NzM3Mw"
  );

  ui = fincode.ui({ layout: "vertical" });
  ui.create("payments", { layout: "vertical" });

  ui.mount("fincode", "400");
};

export const submit = (event) => {
  event.preventDefault();
  ui.getFormData().then((result) => {
    console.log(result);
    // {
    //   CVC: "2658";
    //   cardNo: "4242424242424242";
    //   expire: "2506";
    //   holderName: "rabbit";
    //   method: "2";
    //   month: "06";
    //   payTimes: "3";
    //   year: "25";
    // }
  });
  return false;
};
