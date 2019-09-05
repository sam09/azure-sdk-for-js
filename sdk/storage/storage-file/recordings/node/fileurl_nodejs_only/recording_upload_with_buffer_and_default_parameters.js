let nock = require('nock');

module.exports.testInfo = {"share":"share156767549054207431","dir":"dir156767549097302879","file":"file156767549139105806","randomstring":"randomstring156767549139109008"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767549054207431')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:24:50 GMT',
  'ETag',
  '"0x8D731E2E73F0A3B"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8518ea03-c01a-00b3-11cb-63572e000000',
  'x-ms-client-request-id',
  '33e2cb2e-8ee4-48e1-8ac1-e538d773a0c6',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 05 Sep 2019 09:24:50 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767549054207431/dir156767549097302879')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:24:51 GMT',
  'ETag',
  '"0x8D731E2E77E4C0E"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'ccd86a80-d01a-00bf-23cb-63c026000000',
  'x-ms-client-request-id',
  '01527d81-0cf3-4f6c-b302-106423731395',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:24:51.2398350Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:24:51.2398350Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:24:51.2398350Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:24:50 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767549054207431/dir156767549097302879/file156767549139105806')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:24:51 GMT',
  'ETag',
  '"0x8D731E2E7BC003E"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd2346d02-701a-001f-40cb-634487000000',
  'x-ms-client-request-id',
  '41624add-cc8e-435d-b1bc-5d164aeee580',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:24:51.6442174Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:24:51.6442174Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:24:51.6442174Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:24:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767549054207431/dir156767549097302879/file156767549139105806', "randomstring156767549139109008")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  '+/CCAy8pPD1Rj6UUvKIKtg==',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:24:52 GMT',
  'ETag',
  '"0x8D731E2E7F8F0FD"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'e3ad5e38-b01a-0142-12cb-63b00e000000',
  'x-ms-client-request-id',
  'ad817b51-cfc1-436a-b43c-55ec43e580e0',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:24:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share156767549054207431/dir156767549097302879/file156767549139105806')
  .reply(200, "randomstring156767549139109008", [ 'Content-Length',
  '30',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:24:52 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D731E2E7F8F0FD"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5805b7c0-501a-0008-1acb-63ed8c000000',
  'x-ms-client-request-id',
  '4d4c9143-8a56-4eed-afdc-eda9f2e3bbb6',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-05T09:24:51.6442174Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:24:51.6442174Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:24:51.6442174Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 05 Sep 2019 09:24:51 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156767549054207431')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2ac8db11-a01a-007e-74cb-6367c4000000',
  'x-ms-client-request-id',
  'd486227d-d270-4376-bd4e-0966ea66d26e',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 05 Sep 2019 09:24:52 GMT',
  'Connection',
  'close' ]);
