import{A as e}from"./UIcon.527cdd1c.js";import{g as n}from"./skills.8a684d06.js";import{b as a}from"./paths.87e5a953.js";const o="JUtils is an easy to use challenge plugin for Minecraft: Java Edition. They include numerous fun and difficult challenges, as well as many settings for a maximum gaming experience. A scripting system is planned for the future, so you can create your own challenges.",s=`Need Next-Level AntiCheat? Then it's time to get GetMad! Is's a powerful high performance AntiCheat with lots of checks and has its own Admin-Control-Panel. 

-----

GetMad is a next level AntiCheat plugin for Spigot. It stands out for its excellent scaffold, fly and speed checks. However, all other checks should not be ignored... Due to its high precision, false bans are almost impossible.

# Configs

checks.yml
\`\`\`yaml
# GetMad checks configuration file
# Checks that have multiple modules need to be disabled on a per-module basis
# If you have a false positive and can't determine what subcheck it's from,
# enable debug-mode in config.yml and compare the results against the commented values
# Flight check settings
# Checks if a player moves wrongly in the air
flight:
  # Checks for prolonged air movement
  # Debugs as 'tried to fly on the Y-axis' or 'had too little Y dropoff'
  airFlight:
    # Should this part of the check be enabled?
    enabled: true
    # How many milliseconds to account for block placement
    # Increase this if you get false positives when building a tower
    accountForBlockPlacement: 1200
    # How many milliseconds to account for TPS drops
    # Increase this if you get false positives when building a tower during TPS drops
    accountForTpsDrops: 250
    # How many milliseconds to account for teleports
    # Increase this is you debug 'had too little Y dropoff' after teleports
    accountForTeleports: 400
  # Checks for climbing behaviour in air
  # Debugs as 'tried to climb air'
  airClimb:
    # Should this part of the check be enabled?
    enabled: true
    # How many milliseconds to account for teleports
    # Increase this is you debug 'tried to climb air' after teleports
    accountForTeleports: 300
  # Checks if a player is faking it's ground status to fly
  # Debugs as 'faked ground to fly'
  groundFlight:
    # Should this part of the check be enabled?
    enabled: true
  # Checks if a player ignores gravity
  # Debugs as 'ignored gravity'
  gravity:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum offset between predicted and actual gravity
    maxOffset: 0.005
    # How many milliseconds to account for teleports
    # Increase this is you debug 'ignored gravity' after teleports
    accountForTeleports: 300
    # Amount of illegal moves before flagging
    vlBeforeFlag: 5
# ElytraFly check settings
# Checks for illegal upward elytra movement
elytrafly:
  # Should this check be enabled?
  enabled: true
# Speed check settings
# Checks if a player moves too fast
speed:
  # Checks movement speed in the air
  # Debugs as 'moved too fast in air'
  airSpeed:
    # Should this part of the check be enabled?
    enabled: true
    # Base unadjusted air speed limit
    baseLimit: 0.03125
    # Prediction multiplier for custom walk speeds
    walkSpeedMultiplier: 1.4
  # Checks movement acceleration in the air
  # Debugs as 'exceeded acceleration limits'
  airAcceleration:
    # Should this part of the check be enabled?
    enabled: true
    # Base unadjusted air acceleration limit
    baseLimit: 0.3725
    # Limit multiplier for custom walk speeds
    walkSpeedMultiplier: 1.4
  # Checks movement acceleration in the air
  # Debugs as 'had unexpected jumping behaviour'
  jumpBehaviour:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum movement distance needed to flag
    minimumDistXZ: 0.2
  # Checks movement speed on the ground
  # Debugs as 'moved too fast on ground'
  groundSpeed:
    # Should this part of the check be enabled?
    enabled: true
    # Initial speed limit value
    initialLimit: 0.34
  # Checks movement acceleration in the air
  # Debugs as 'exceeded vertical speed limit'
  verticalSpeed:
    # Should this part of the check be enabled?
    enabled: true
    # Extra compensation when moving off a ladder up a slab
    climbableCompensation: 0.04
# Strafe check settings
# Checks if a player switches movement angle in air
strafe:
  # Should this check be enabled?
  enabled: true
  # How many milliseconds to account for teleports
  accountForTeleports: 300
  # Maximum angle change when moving in air
  maxAngleChange: 0.5
  # Minimum movement distance for the strafe check to be active
  minActivationDistance: 0.04
# WaterWalk check settings
# Checks if a player is walking on water
waterwalk:
  # Checks for vanilla water walking/jumping
  # Debugs as 'tried to walk on water'
  walk:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum xz distance before flagging
    # This combats false positives, while giving hackers not much leniency
    minimumDistXZ: 0.092
  # Checks for small hops on top of water
  # Debugs as 'tried to hop on water'
  hop:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum lunge Y motion to flag
    maxMotionY: 0.1
  # Checks for small lunges in water
  # Debugs as 'tried to lunge in water'
  lunge:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum xz distance before flagging
    # This combats false positives, while giving hackers not much leniency
    minimumDistXZ: 0.098
# FastLadder check settings
# Checks if a player moves too fast on a ladder
fastladder:
  # Should this check be enabled?
  enabled: true
  # Maximum speed a player on a ladder can travel upwards
  speedUpMax: 0.11761
  # Maximum speed a player on a ladder can travel downwards
  speedDownMax: 0.15
  # Amount of illegal ladder moves before flagging
  vlBeforeFlag: 3
# BoatFly check settings
# Checks if the player is flying in a boat
boatfly:
  # Should this check be enabled?
  enabled: true
  # Amount of in-boat airborne moments before flagging
  vlBeforeFlag: 2
# KillAura check settings
# Checks if the player uses a form of kill aura
killaura:
  # Checks reach distance in fights
  # Debugs as 'reached too far'
  reach:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum base reach distances
    baseMaxValue:
      # Maximum base reach value
      normal: 3.6
      # Maximum base reach value when a player has velocity
      velocitized: 4.0
    # Settings for lag compensation
    lagCompensation:
      # Basic extra allowed reach when a player is lagging
      lagExtraReach: 0.2
      # Extra allowed reach distance per millisecond of ping
      pingCompensation: 0.0025
    # The multiplier of extra compensation for velocity
    velocityMultiplier: 1.2
  # Checks if the target it within a players viewing angle
  # Debugs as 'tried to attack from an illegal angle'
  angle:
    # Should this part of the check be enabled?
    enabled: true
    # Maximum difference in angle from the players view
    maxDifference: 50
    # Amount of illegally angled hits before flagging
    vlBeforeFlag: 3
  # Checks if the player has a suspicious packet order
  # Debugs as 'suspicious packet order'
  packetOrder:
    # Should this part of the check be enabled?
    enabled: true
    # Minimum server TPS needed for the packet order subcheck to be active
    minimumTps: 17.5
    # Minimum elapsed time in milliseconds between a movement packet and a combat packet
    minElapsedTime: 5
    # Amount of suspicious combat packet situations before flagging
    vlBeforeFlag: 3
# Aimbot check settings
# Checks if the player is sending aimbot-like movements
aimbot:
  # Should this check be enabled?
  enabled: true
  # Minimum yaw difference when repeated
  minYaw: 30
  # Maximum yaw difference when repeated
  maxYaw: 355
# Criticals check settings
# Checks if the player tries to do a crit without needed conditions
criticals:
  # Should this check be enabled?
  enabled: true
# Velocity check settings
# Checks if the player ignores knockback
velocity:
  # Should this check be enabled?
  enabled: true
  # Minimum percentage of the given knockback a player has to meet
  minimumPercentage: 75
  # Amount of low-velocity moments before flagging
  vlBeforeFlag: 2
# FastPlace check settings
# Checks if the player places blocks too fast
fastplace:
  # Should this check be enabled?
  enabled: true
  # Minimum time in milliseconds between block places
  minimumTime: 50
  # Amount of fastplace-moments before flagging a survival player
  vlBeforeFlagSurvival: 3
  # Amount of fastplace-moments before flagging a creative player
  vlBeforeFlagCreative: 4
  # Amount of time in milliseconds to prevent a player from placing blocks after flagging
  blockPlacementTime: 1000
# IllegalInteract check settings
# Checks if the player is using, placing or breaking blocks from illegal angles
illegalinteract:
  # Maximum difference in angle from the players view
  maxAngleDifference: 90
  # Checks angle when breaking a block
  # Debugs as 'tried to break a block which was out of view'
  break:
    # Should this part of the check be enabled?
    enabled: true
  # Checks angle when placing a block
  # Debugs as 'tried to place a block which was out of view'
  place:
    # Should this part of the check be enabled?
    enabled: true
  # Checks angle when placing a block
  # Debugs as 'tried to interact out of range' or 'tried to interact out of view'
  interact:
    # Should this part of the check be enabled?
    enabled: true
    # Default survival interact range
    survivalRange: 5.8
    # Default creative interact range
    creativeRange: 6.8
    # Extra allowed reach distance per millisecond of ping
    pingCompensation: 0.0045
    # The multiplier of extra compensation for velocity
    velocityMultiplier: 1.5
# BadPackets check settings
# Checks for illegal packets
badpackets:
  # Should this check be enabled?
  enabled: true
  # Minimum server TPS needed for BadPackets to be active
  minimumTps: 17.5
  # Maximum distance a player can move between packets
  maxDistance: 25.0
  # The amount of milliseconds to compensate for a teleport (50ms = 1 tick)
  teleportCompensation: 300
# MorePackets check settings
# Checks for an extra amount of packets and modified game timers
morepackets:
  # Should this check be enabled?
  enabled: true
  # Minimum server TPS needed for MorePackets to be active
  minimumTps: 17.5
  # Maximum amount of lag compensation a player can acquire (50ms = 1 tick)
  minimumClamp: 1000
  # The amount of milliseconds offset between packets before flagging (50ms = 1 tick)
  triggerBalance: 100
  # The amount of milliseconds to compensate for a teleport (50ms = 1 tick)
  teleportCompensation: 300
  # Should MorePackets be disabled for 'lagging' players?
  # This can easily be spoofed by clients!
  disableForLagging: false
  # Maximum ping value before MorePackets stops checking a player (-1 to disable)
  # This can easily be spoofed by clients!
  maxPing: -1
# Sneak check settings
# Checks if the player toggles sneak too fast
sneak:
  # Should this check be enabled?
  enabled: true
  # Should MorePackets be disabled for 'lagging' players?
  # This can easily be spoofed by clients!
  disableForLagging: false
  # Minimum server TPS needed for sneak
  minimumTps: 15
  # Minimum time in milliseconds between sneak toggles
  minToggleTime: 75
# NoSlow check settings
# Checks if the player moves too fast while blocking
noslow:
  # Should this check be enabled?
  enabled: true
  # Minimum time difference in milliseconds between toggling use item state
  minimumDifference: 75
  # Minimum movement distance needed to flag
  minimumDistXZ: 0.15
  # Amount of no slowdown moments before flagging
  vlBeforeFlag: 3
# Spider check settings
# Checks if the player tries to climb a non-climbable block
spider:
  # Should this check be enabled?
  enabled: true
# NoFall check settings
# Checks if the player tries to ignore fall damage
nofall:
  # Should this check be enabled?
  enabled: true
  # Amount of moves with a modified fall distance before flagging
  vlBeforeFlag: 6
# Sprint check settings
# Checks if the player tries to sprint without the needed conditions
sprint:
  # Should this check be enabled?
  enabled: true
  # Minimum food level needed to sprint
  sprintFoodMin: 6
# FastBow check settings
# Checks if the player fires a bow too fast
fastbow:
  # Should this check be enabled?
  enabled: true
  # Maximum percent error between predicted bow force and actual bow force
  bowError: 0.25
# FastEat check settings
# Checks if the player consumes food too fast
fasteat:
  # Should this check be enabled?
  enabled: true
  # Minimum time in milliseconds it takes to consume food
  eatTimeMin: 1000
# FastHeal check settings
# Checks if the player regains health too fast
fastheal:
  # Should this check be enabled?
  enabled: true
  # Minimum server TPS needed for FastHeal to be active
  minimumTps: 17.5
  # Should FastHeal be disabled for 'lagging' players?
  # This can easily be spoofed by clients!
  disableForLagging: false
  # The minimum time it takes to regenerate health in milliseconds
  # Vanilla is 500, but enforcing this will cause too many false positives
  minHealTime: 475
  # Amount of milliseconds a player can heal faster per millisecond of ping
  pingCompensation: 0.25
# FastProjectile check settings
# Checks if the player fires a projectile too fast
fastprojectile:
  # Should this check be enabled?
  enabled: true
  # Number of projectiles to wait for before checking how long they took to fire off
  projectilesToWait: 10
  # The minimum time in milliseconds it should have taken for the player fire 'projectilesToWait' projectiles
  minimumTime: 1500
# ItemSpam check settings
# Checks if the player drops items too fast
itemspam:
  # Should this check be enabled?
  enabled: true
  # The number of item drops we should wait before checking if the player has used item spam
  dropsToWait: 10
  # The minimum time in milliseconds it should have taken for the player to drop items 'dropsToWait' times
  minimumTime: 800
# FastInventory check settings
# Checks if the player moves items in the inventory too fast
fastinventory:
  # Should this check be enabled?
  enabled: true
  # The number of clicks we should wait before checking if the player has used fast inventory
  clicksToWait: 10
  # The minimum time in milliseconds it should have taken for the player to click 'clicksToWait' times
  minimumTime: 50
# vClip check settings
# Checks if the player is clipping
vclip:
  # Should this check be enabled?
  enabled: true
  # Spoofs the players health so it can't be checked
healthSpoof:
  # Should this check be enabled?
  enabled: true
  # Spoofs the players so they can't get displayed by ESP
antiESP:
  # Should this check be enabled?
  enabled: true
# ChatUnicode check settings
# Checks for illegal unicode characters in the chat
chatunicode:
  # Should this check be enabled?
  enabled: true
# ChatSpam check settings
# Checks for a spam of chat messages
chatspam:
  # Should this check be enabled?
  enabled: true
  # Minimum time between chats
  timeMin: 500
  # Time in milliseconds after which repeating yourself in chat is ignored
  repeatIgnore: 600
  # Number of chat spam violations before action one (see config.yml) is executed
  levelActionOne: 5
  # Number of chat spam violations before action two (see config.yml) is executed
  levelActionTwo: 10
# CommandSpam check settings
# Checks for a spam of commands
commandspam:
  # Should this check be enabled?
  enabled: true
  # Minimum time between commands
  timeMin: 250
  # Time in milliseconds after which repeating a command is ignored
  repeatIgnore: 500
  # Number of command spam violations before action one (see config.yml) is executed
  levelActionOne: 5
  # Number of command spam violations before action two (see config.yml) is executed
  levelActionTwo: 10
\`\`\``,l=`A URL-shortener is a tool designed to condense long URLs into shorter, more manageable links. These abbreviated links are easier to share, especially on platforms like social media, where character limits may be restrictive. The process typically involves taking a lengthy URL and generating a unique, abbreviated code that redirects users to the original destination when clicked. URL-shorteners often offer additional features such as tracking click analytics, customizing link endings, and managing multiple shortened links within a dashboard. They serve to streamline communication, enhance user experience, and provide valuable insights into link engagement and audience behavior.


## API Reference

#### Short specific url

\`\`\`http
  POST /api/v1/add
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`url\` | \`string\` | **Required**. The url you want to short |

#### Get information about url

\`\`\`http
  GET /api/v1/about/\${uuid}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`uuid\`      | \`string\` | **Required**. UUID of url to fetch |


## Usage/Examples

Java
\`\`\`java
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
            String jsonPayload = "{\\"url\\":\\"" + urlToShorten + "\\"}";
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
\`\`\`

`,r=`A Snippets Uploader is a versatile tool designed to simplify the process of sharing and managing code snippets online. It enables users to quickly upload snippets of code, ranging from small functions to larger blocks, to a centralized platform for easy access and sharing. These snippets can be annotated, tagged, and categorized for organization and searchability, allowing users to efficiently find and reuse code segments as needed. Additionally, Snippets Uploaders often offer features such as syntax highlighting, version control, and collaboration options, allowing teams to collaborate on code projects seamlessly. Whether for personal use, collaborative coding, or sharing solutions with a broader community, a Snippets Uploader provides a convenient and efficient way to manage and distribute code snippets.
## API Reference

#### Add Snippet

\`\`\`http
  POST /api/v1/snippet/create
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`content\` | \`byte[]\` | **Required**. The code snippet in bytes, serialized using Base64 |

#### Get item

\`\`\`http
  GET /api/v1/snippet/get/\${uuid}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`uuid\`      | \`string\` | **Required**. Id of snippet to fetch |
`,t=i=>`${a}/imgs/${i}`,m=[{slug:"jutils",color:"#5e95e3",description:o,shortDescription:"Minecraft challenge plugin with Backend for license generation and a sellix hook",links:[{to:"https://jutils.dasshept.de",label:"Website"}],logo:e.JUtils,name:"JUtils",period:{from:new Date(2022,2,22)},skills:n("java","spring","json","postgres"),type:"Minecraft Plugins",screenshots:[{label:"Insight",src:t("jutils-insight.png")}]},{slug:"getmad",color:"#ff3e00",description:s,shortDescription:"Advanced Minecraft cheat detection",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:e.GetMad,name:"GetMad",period:{from:new Date(2021,11,13)},skills:n("java","yaml"),type:"Minecraft AntiCheat"},{slug:"urlshorter",color:"#ff3e00",description:l,shortDescription:"URL shorting REST API",links:[{to:"https://github.com/mcshept/URLShorter",label:"GitHub"}],logo:e.Unknown,name:"URLShorter",period:{from:new Date(2023,11,28)},screenshots:[{label:"Main Page Blank",src:t("shorter-insight1.png")},{label:"About Page Blank",src:t("shorter-insight2.png")},{label:"Main Page Example",src:t("shorter-insight3.png")},{label:"About Page Example",src:t("shorter-insight4.png")}],skills:n("java","spring","json","postgres"),type:"REST API"},{slug:"snippets",color:"#9DB3C8",description:r,shortDescription:"Snippet storing REST API",links:[{to:"https://github.com/mcshept/SnippetsUploader",label:"GitHub"}],logo:e.Unknown,name:"Snippets Uploader",period:{from:new Date(2024,0,26)},skills:n("java","spring","json","postgres"),type:"REST API"},{slug:"norisk",color:"#9DB3C8",description:"Currently, there is no set release date. For updates on the current state of the client, check out their discord or NoRisk's YouTube channel.",shortDescription:"Minecraft PvP Client",links:[{to:"https://github.com/NoriskClient",label:"GitHub"},{to:"https://norisk.gg",label:"Website"}],logo:e.NoRisk,name:"Norisk Client",period:{from:new Date(2023,5,3),to:new Date(2024,0,5)},skills:n("java","kotlin","ktor","json"),type:"Minecraft Client"}],p="Projects";export{m as i,p as t};
