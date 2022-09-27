import controller from "../../source/controllers/userController";
import userData from "../../source/data";
import { Request, Response } from "express";

describe("Test Cases", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject = {};

  test("GET all Users", () => {
    mockRequest = {};
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
    const expectedStatusCode = 200;
    const expectedResponse = {
      userData: userData,
    };

    controller.getUsers(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedResponse);
  });

  test("GET user with ID equals 1", () => {
    const id = "1";
    mockRequest = {
      params: { id: id },
    };
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
    const expectedStatusCode = 200;
    const expectedResponse = {
      userData: userData.find((el) => el.id === +id),
    };
    controller.getUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedResponse);
  });

  test("POST new user", () => {
    const newUser = {
      id: 6,
      name: "Pam",
      age: 28,
      occupation: "Artist",
    };

    mockRequest = {
      body: newUser,
    };
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
    const expectedStatusCode = 201;
    const expectedResponse = {
      data: newUser,
      message: "Added Successfully",
    };
    controller.addUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedResponse);
  });

  test("UPDATE user with ID equals 3", () => {
    const id = "3";
    const updatedUser = {
      id: 3,
      name: "Dwight",
      age: 44,
      occupation: "Architect",
    };
    mockRequest = {
      params: { id: id },
      body: updatedUser,
    };
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
    const expectedStatusCode = 200;
    const expectedResponse = {
      oldData: userData.find((el) => el.id === +id),
      newData: updatedUser,
      message: "Updated Successfully",
    };
    controller.updateUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedResponse);
  });

  test("DELETE user with ID equals 4", () => {
    const id = "4";
    mockRequest = {
      params: { id: id },
    };
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
    const expectedStatusCode = 200;
    const expectedResponse = {
      oldData: userData.find((el) => el.id === +id),
      message: "Deleted Successfully",
    };
    controller.deleteUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedResponse);
  });
});
