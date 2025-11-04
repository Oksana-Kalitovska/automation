import { test, expect } from '@playwright/test';


test.describe.parallel('API tests', () => {
    const baseURL = 'https://reqres.in/api';
    const apiKey = 'reqres-free-v1';
    

    test('Simple GET request to verify status code and response time', async ({ request }) => {
const response = await request.get(`${baseURL}/users/3`,  {
    headers: {
      'x-api-key': apiKey
    }
  });
await expect(response.status()).toBe(200);
const responseBody = JSON.parse(await response.text());
console.log(responseBody);
});

/* 
test('Simple GET request - NOT A VALID ENDPOINT', async ({ request }) => {
  const response = await request.get(`${baseURL}/not-a-valid-endpoint`);  
await expect(response.status()).toBe(404); 

}); 
*/

test('GET User Details', async ({ request }) => {
  const response = await request.get(`${baseURL}/users/1`,{
    headers: {
      'x-api-key': apiKey
    }
    });
  const responseBody = JSON.parse(await response.text());
  await expect(response.status()).toBe(200);
  console.log(responseBody);
  await expect(responseBody.data.id).toBe(1);
    await expect(responseBody.data.email).toBeTruthy();
    await expect(responseBody.data.last_name).toBe('Bluth');
    await expect(responseBody.data.avatar).toBe('https://reqres.in/img/faces/1-image.jpg');
    
});

test('POST Create User', async ({ request }) => {
    const response = await request.post(`${baseURL}/users`, {
        headers: 
    {
      'x-api-key': apiKey
      }, data: {
  'id': 4,
}
    })
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    await expect(response.status()).toBe(201);
    await expect(responseBody.id).toBe(4);
    await expect(responseBody.createdAt).toBeTruthy();
    })



    test('POST Login - successful', async ({ request }) => {
        const response = await request.post(`${baseURL}/login`, {
            headers: 
        {
          'x-api-key': apiKey
            }, data: {
        'email': 'eve.holt@reqres.in',
        'password': 'cityslicka'
        }
        })
        const responseBody = JSON.parse(await response.text());
        expect(response.status()).toBe(200);
        expect(responseBody.token).toBeTruthy();
        console.log(responseBody);
        });


        test('POST Login - Failed', async ({ request }) => {
        const response = await request.post(`${baseURL}/login`, {
            headers: 
        {
          'x-api-key': apiKey
            }, data: {
        'email': 'eve.holt@reqres.in'
        }
        })
        const responseBody = JSON.parse(await response.text());
        expect(response.status()).toBe(400);
        expect(responseBody.error).toBe('Missing password');
        console.log(responseBody);
        });


        test('PUT Update - successful', async ({ request }) => {
        const response = await request.put(`${baseURL}/users/2`, {
            headers: 
        {
          'x-api-key': apiKey
        },
        data: { 
            'name': 'new name',
            'job': 'new job'
        }
        })
        const responseBody = JSON.parse(await response.text());
        expect(response.status()).toBe(200);
        expect(responseBody.name).toBe('new name');
        expect(responseBody.job).toBe('new job');
        expect(responseBody.updatedAt).toBeTruthy();
        console.log(responseBody);
        })



        test('DELETE User', async ({ request }) => {
        const response = await request.delete(`${baseURL}/users/2`, {
            headers: 
        {
          'x-api-key': apiKey
        }
        })
        expect(response.status()).toBe(204);
        console.log('User deleted successfully');
        });

    }); 