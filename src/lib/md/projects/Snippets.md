A Snippets Uploader is a versatile tool designed to simplify the process of sharing and managing code snippets online. It enables users to quickly upload snippets of code, ranging from small functions to larger blocks, to a centralized platform for easy access and sharing. These snippets can be annotated, tagged, and categorized for organization and searchability, allowing users to efficiently find and reuse code segments as needed. Additionally, Snippets Uploaders often offer features such as syntax highlighting, version control, and collaboration options, allowing teams to collaborate on code projects seamlessly. Whether for personal use, collaborative coding, or sharing solutions with a broader community, a Snippets Uploader provides a convenient and efficient way to manage and distribute code snippets.
## API Reference

#### Add Snippet

```http
  POST /api/v1/snippet/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `content` | `byte[]` | **Required**. The code snippet in bytes, serialized using Base64 |

#### Get item

```http
  GET /api/v1/snippet/get/${uuid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`      | `string` | **Required**. Id of snippet to fetch |
