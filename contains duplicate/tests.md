| Input           | Expected result | Actual result |
|-----------------|-----------------|---------------|
| [1]             | false           | false         |
| [1,1]           | true            | true          |
| [1, 2, 3, 1]    | true            | true          |
| [1, 2, 3, 2]    | true            | false         |
| [2, 14, 18, 22] | true            | false         |
| []              | false           | false         |
