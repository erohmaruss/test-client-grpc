// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var getuser_pb = require('./getuser_pb.js');

function serialize_protobuff_GetUserRequest(arg) {
  if (!(arg instanceof getuser_pb.GetUserRequest)) {
    throw new Error('Expected argument of type protobuff.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_GetUserRequest(buffer_arg) {
  return getuser_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protobuff_GetUserResponse(arg) {
  if (!(arg instanceof getuser_pb.GetUserResponse)) {
    throw new Error('Expected argument of type protobuff.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protobuff_GetUserResponse(buffer_arg) {
  return getuser_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/protobuff.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: getuser_pb.GetUserRequest,
    responseType: getuser_pb.GetUserResponse,
    requestSerialize: serialize_protobuff_GetUserRequest,
    requestDeserialize: deserialize_protobuff_GetUserRequest,
    responseSerialize: serialize_protobuff_GetUserResponse,
    responseDeserialize: deserialize_protobuff_GetUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
