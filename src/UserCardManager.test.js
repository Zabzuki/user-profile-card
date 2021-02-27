import React from "react";
import "@testing-library/jest-dom/extend-expect";
import UserCardManager from "./UserCardManager";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";

beforeAll(() => jest.spyOn(window, "fetch"));

it("displays spinned when it's loading", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [],
        }),
    })
  );

  let rendered;
  await act(async () => {
    rendered = render(<UserCardManager />);
  });
  const { getByTestId } = rendered;
  const spinner = getByTestId("spinner");

  expect(spinner).toBeInTheDocument();
});

it("displays the title and user when results are loaded", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [
            {
              gender: "female",
              name: {
                title: "Mrs",
                first: "Cléa",
                last: "Roger",
              },
              location: {
                street: {
                  number: 3177,
                  name: "Place du 8 Février 1962",
                },
                city: "Metz",
                state: "Haut-Rhin",
                country: "France",
                postcode: 22938,
                coordinates: {
                  latitude: "4.4554",
                  longitude: "119.2716",
                },
                timezone: {
                  offset: "+5:45",
                  description: "Kathmandu",
                },
              },
              email: "clea.roger@example.com",
              login: {
                uuid: "3e7b5475-22c3-4780-897f-1a9ca84f7de7",
                username: "yellowbutterfly671",
                password: "indon",
                salt: "kUlEIcXJ",
                md5: "c61b82876c584c881817fec7f5bf9f98",
                sha1: "224fd57330e4517a57a72fd0e1c77feec1950d17",
                sha256:
                  "c56785ff93e49fbb6e15a2ef6cbe069299995c1445103144966458751fb56314",
              },
              dob: {
                date: "1978-01-29T09:44:35.448Z",
                age: 43,
              },
              registered: {
                date: "2015-08-19T14:27:52.667Z",
                age: 6,
              },
              phone: "03-29-48-94-44",
              cell: "06-63-29-58-56",
              id: {
                name: "INSEE",
                value: "2NNaN36960094 51",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/62.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/62.jpg",
              },
              nat: "FR",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Miguel",
                last: "Fuentes",
              },
              location: {
                street: {
                  number: 4047,
                  name: "Calle de Bravo Murillo",
                },
                city: "Oviedo",
                state: "Asturias",
                country: "Spain",
                postcode: 90314,
                coordinates: {
                  latitude: "-0.0364",
                  longitude: "-12.9622",
                },
                timezone: {
                  offset: "0:00",
                  description:
                    "Western Europe Time, London, Lisbon, Casablanca",
                },
              },
              email: "miguel.fuentes@example.com",
              login: {
                uuid: "a54e8c89-69fa-400f-a935-2c476692ee51",
                username: "smallbutterfly427",
                password: "komodo",
                salt: "3vfirANh",
                md5: "4a8fd0b3769a750b486135e0a94e940e",
                sha1: "ac7f9d6888b8bf1054466b5bbd8bcef9b886f465",
                sha256:
                  "c520751cf15712ca82f051287abd8d836f15727eae0ff44dbc30d3078c1cab6f",
              },
              dob: {
                date: "1945-09-10T12:47:52.614Z",
                age: 76,
              },
              registered: {
                date: "2011-11-03T02:22:17.917Z",
                age: 10,
              },
              phone: "990-574-636",
              cell: "680-425-685",
              id: {
                name: "DNI",
                value: "19247273-L",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/57.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/57.jpg",
              },
              nat: "ES",
            },
          ],
        }),
    })
  );

  let rendered;
  await act(async () => {
    rendered = render(<UserCardManager />);
  });
  const { getByText, getByTestId } = rendered;
  const heading = getByText("User Card");
  const userCard = getByTestId("user");

  expect(heading).toBeInTheDocument();
  expect(userCard).toBeInTheDocument();
});

it("render error when loaded", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() => {
    return Promise.reject("an error happened");
  });

  let rendered;
  await act(async () => {
    rendered = render(<UserCardManager />);
  });
  const { getByTestId } = rendered;
  const heading = getByTestId("error");

  expect(heading).toBeInTheDocument();
});
