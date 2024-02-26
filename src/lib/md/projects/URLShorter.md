A URL-shortener is a tool designed to condense long URLs into shorter, more manageable links. These abbreviated links are easier to share, especially on platforms like social media, where character limits may be restrictive. The process typically involves taking a lengthy URL and generating a unique, abbreviated code that redirects users to the original destination when clicked. URL-shorteners often offer additional features such as tracking click analytics, customizing link endings, and managing multiple shortened links within a dashboard. They serve to streamline communication, enhance user experience, and provide valuable insights into link engagement and audience behavior.


## API Reference

#### Short specific url

```http
  POST /api/v1/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. The url you want to short |

#### Get information about url

```http
  GET /api/v1/about/${uuid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`      | `string` | **Required**. UUID of url to fetch |


## Usage/Examples

Java
```java
import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.ContentType;
import org.apache.hc.core5.http.HttpEntity;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.json.JSONObject;

private void sendRequest(String targetUrl, String urlToShorten) {
        try {
            CloseableHttpClient httpclient = HttpClients.createDefault();
            HttpPost httpPost = new HttpPost("https://" + targetUrl + ":8080/api/v1/add");
            String jsonPayload = "{\"url\":\"" + urlToShorten + "\"}";
            HttpEntity stringEntity = new StringEntity(jsonPayload, ContentType.APPLICATION_JSON);
            httpPost.setEntity(stringEntity);
            CloseableHttpResponse response = httpclient.execute(httpPost);
            HttpEntity responseEntity = response.getEntity();
            String responseBody = EntityUtils.toString(responseEntity);

            JSONObject jsonObject = new JSONObject(responseBody);
            String url = jsonObject.getString("url");
            String uuid = jsonObject.getString("uuid");
            System.out.println("Shortened URL: " + url);
            System.out.println("UUID: " + uuid);
        } catch (Exception ignored) {
        }
    }
```

