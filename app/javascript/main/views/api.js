
export const fetchStores = (before, after) => {
  before()

  fetch('/stores')
    .then(function(response) {
      // after(response.data)
      after([
        {
          "uuid": "20170228-F4F1-401B-80FA-9ECCA8451FFB",
          "address": "Россия, Москва, Старопанский переулок",
          "name": "Мой магазин",
          "code": "1"
        },
        {
          "uuid": "20170228-F4F1-401B-80FA-9ECCA8451FFB",
          "address": "Россия, Москва, Старопанский переулок",
          "name": "Мой магазин",
          "code": "2"
        }

      ])
    })
    .catch( alert );
}
