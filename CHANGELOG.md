Changes in [1.11.4](https://github.com/vector-im/element-desktop/releases/tag/v1.11.4) (2022-08-31)
===================================================================================================

## 🔒 Security
* Fixes for [CVE-2022-36059](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=CVE%2D2022%2D36059) and [CVE-2022-36060](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=CVE%2D2022%2D36060)

Learn more about what we've been up to at https://element.io/blog/element-web-desktop-1-11-4-a-security-update-deferred-dms-and-more/
Find more details of the vulnerabilities at https://matrix.org/blog/2022/08/31/security-releases-matrix-js-sdk-19-4-0-and-matrix-react-sdk-3-53-0

## ✨ Features
 * Upgrade to Electron 20 ([\#403](https://github.com/vector-im/element-desktop/pull/403)).
 * Device manager - scroll to filtered list from security recommendations ([\#9227](https://github.com/matrix-org/matrix-react-sdk/pull/9227)). Contributed by @kerryarchibald.
 * Device manager - updated dropdown style in filtered device list ([\#9226](https://github.com/matrix-org/matrix-react-sdk/pull/9226)). Contributed by @kerryarchibald.
 * Device manager - device type and verification icons on device tile ([\#9197](https://github.com/matrix-org/matrix-react-sdk/pull/9197)). Contributed by @kerryarchibald.
 * Ignore unreads in low priority rooms in the space panel ([\#6518](https://github.com/matrix-org/matrix-react-sdk/pull/6518)). Fixes vector-im/element-web#16836.
 * Release message right-click context menu out of labs ([\#8613](https://github.com/matrix-org/matrix-react-sdk/pull/8613)).
 * Device manager - expandable session details in device list ([\#9188](https://github.com/matrix-org/matrix-react-sdk/pull/9188)). Contributed by @kerryarchibald.
 * Device manager - device list filtering ([\#9181](https://github.com/matrix-org/matrix-react-sdk/pull/9181)). Contributed by @kerryarchibald.
 * Device manager - add verification details to session details ([\#9187](https://github.com/matrix-org/matrix-react-sdk/pull/9187)). Contributed by @kerryarchibald.
 * Device manager - current session expandable details ([\#9185](https://github.com/matrix-org/matrix-react-sdk/pull/9185)). Contributed by @kerryarchibald.
 * Device manager - security recommendations section ([\#9179](https://github.com/matrix-org/matrix-react-sdk/pull/9179)). Contributed by @kerryarchibald.
 * The Welcome Home Screen: Return Button ([\#9089](https://github.com/matrix-org/matrix-react-sdk/pull/9089)). Fixes vector-im/element-web#22917. Contributed by @justjanne.
 * Device manager - label devices as inactive ([\#9175](https://github.com/matrix-org/matrix-react-sdk/pull/9175)). Contributed by @kerryarchibald.
 * Device manager - other sessions list ([\#9155](https://github.com/matrix-org/matrix-react-sdk/pull/9155)). Contributed by @kerryarchibald.
 * Implement MSC3846: Allowing widgets to access TURN servers ([\#9061](https://github.com/matrix-org/matrix-react-sdk/pull/9061)).
 * Allow widgets to send/receive to-device messages ([\#8885](https://github.com/matrix-org/matrix-react-sdk/pull/8885)).

## 🐛 Bug Fixes
 * Add super cool feature ([\#9222](https://github.com/matrix-org/matrix-react-sdk/pull/9222)). Contributed by @gefgu.
 * Make use of js-sdk roomNameGenerator to handle i18n for generated room names ([\#9209](https://github.com/matrix-org/matrix-react-sdk/pull/9209)). Fixes vector-im/element-web#21369.
 * Fix progress bar regression throughout the app ([\#9219](https://github.com/matrix-org/matrix-react-sdk/pull/9219)). Fixes vector-im/element-web#23121.
 * Reuse empty string & space string logic for event types in devtools ([\#9218](https://github.com/matrix-org/matrix-react-sdk/pull/9218)). Fixes vector-im/element-web#23115.
 * Reduce amount of requests done by the onboarding task list ([\#9194](https://github.com/matrix-org/matrix-react-sdk/pull/9194)). Fixes vector-im/element-web#23085. Contributed by @justjanne.
 * Avoid hardcoding branding in user onboarding ([\#9206](https://github.com/matrix-org/matrix-react-sdk/pull/9206)). Fixes vector-im/element-web#23111. Contributed by @justjanne.
 * End jitsi call when member is banned ([\#8879](https://github.com/matrix-org/matrix-react-sdk/pull/8879)). Contributed by @maheichyk.
 * Fix context menu being opened when clicking message action bar buttons ([\#9200](https://github.com/matrix-org/matrix-react-sdk/pull/9200)). Fixes vector-im/element-web#22279 and vector-im/element-web#23100.
 * Add gap between checkbox and text in report dialog following the same pattern (8px) used in the gap between the two buttons. It fixes vector-im/element-web#23060 ([\#9195](https://github.com/matrix-org/matrix-react-sdk/pull/9195)). Contributed by @gefgu.
 * Fix url preview AXE and layout issue & add percy test ([\#9189](https://github.com/matrix-org/matrix-react-sdk/pull/9189)). Fixes vector-im/element-web#23083.
 * Wrap long space names ([\#9201](https://github.com/matrix-org/matrix-react-sdk/pull/9201)). Fixes vector-im/element-web#23095.
 * Attempt to fix `Failed to execute 'removeChild' on 'Node'` ([\#9196](https://github.com/matrix-org/matrix-react-sdk/pull/9196)).
 * Fix soft crash around space hierarchy changing between spaces ([\#9191](https://github.com/matrix-org/matrix-react-sdk/pull/9191)). Fixes matrix-org/element-web-rageshakes#14613.
 * Fix soft crash around room view store metrics ([\#9190](https://github.com/matrix-org/matrix-react-sdk/pull/9190)). Fixes matrix-org/element-web-rageshakes#14361.
 * Fix the same person appearing multiple times when searching for them. ([\#9177](https://github.com/matrix-org/matrix-react-sdk/pull/9177)). Fixes vector-im/element-web#22851.
 * Fix space panel subspace indentation going missing ([\#9167](https://github.com/matrix-org/matrix-react-sdk/pull/9167)). Fixes vector-im/element-web#23049.
 * Fix invisible power levels tile when showing hidden events ([\#9162](https://github.com/matrix-org/matrix-react-sdk/pull/9162)). Fixes vector-im/element-web#23013.
 * Space panel accessibility improvements ([\#9157](https://github.com/matrix-org/matrix-react-sdk/pull/9157)). Fixes vector-im/element-web#22995.
 * Fix inverted logic for showing UserWelcomeTop component ([\#9164](https://github.com/matrix-org/matrix-react-sdk/pull/9164)). Fixes vector-im/element-web#23037.

Changes in [1.11.3](https://github.com/vector-im/element-desktop/releases/tag/v1.11.3) (2022-08-16)
===================================================================================================

## ✨ Features
 * Improve auth aria attributes and semantics ([\#22948](https://github.com/vector-im/element-web/pull/22948)).
 * Device manager - New device tile info design ([\#9122](https://github.com/matrix-org/matrix-react-sdk/pull/9122)). Contributed by @kerryarchibald.
 * Device manager generic settings subsection component ([\#9147](https://github.com/matrix-org/matrix-react-sdk/pull/9147)). Contributed by @kerryarchibald.
 * Migrate the hidden read receipts flag to new "send read receipts" option ([\#9141](https://github.com/matrix-org/matrix-react-sdk/pull/9141)).
 * Live location sharing - share location at most every 5 seconds ([\#9148](https://github.com/matrix-org/matrix-react-sdk/pull/9148)). Contributed by @kerryarchibald.
 * Increase max length of voice messages to 15m ([\#9133](https://github.com/matrix-org/matrix-react-sdk/pull/9133)). Fixes vector-im/element-web#18620.
 * Move pin drop out of labs ([\#9135](https://github.com/matrix-org/matrix-react-sdk/pull/9135)).
 * Start DM on first message ([\#8612](https://github.com/matrix-org/matrix-react-sdk/pull/8612)). Fixes vector-im/element-web#14736.
 * Remove "Add Space" button from RoomListHeader when user cannot create spaces ([\#9129](https://github.com/matrix-org/matrix-react-sdk/pull/9129)).
 * The Welcome Home Screen: Dedicated Download Apps Dialog ([\#9120](https://github.com/matrix-org/matrix-react-sdk/pull/9120)). Fixes vector-im/element-web#22921. Contributed by @justjanne.
 * The Welcome Home Screen: "Submit Feedback" pane ([\#9090](https://github.com/matrix-org/matrix-react-sdk/pull/9090)). Fixes vector-im/element-web#22918. Contributed by @justjanne.
 * New User Onboarding Task List ([\#9083](https://github.com/matrix-org/matrix-react-sdk/pull/9083)). Fixes vector-im/element-web#22919. Contributed by @justjanne.
 * Add support for disabling spell checking ([\#8604](https://github.com/matrix-org/matrix-react-sdk/pull/8604)). Fixes vector-im/element-web#21901.
 * Live location share - leave maximised map open when beacons expire ([\#9098](https://github.com/matrix-org/matrix-react-sdk/pull/9098)). Contributed by @kerryarchibald.

## 🐛 Bug Fixes
 * Some slash-commands (`/myroomnick`) have temporarily been disabled before the first message in a DM is sent. ([\#9193](https://github.com/matrix-org/matrix-react-sdk/pull/9193)).
 * Use stable reference for active tab in tabbedView ([\#9145](https://github.com/matrix-org/matrix-react-sdk/pull/9145)). Contributed by @kerryarchibald.
 * Fix pillification sometimes doubling up ([\#9152](https://github.com/matrix-org/matrix-react-sdk/pull/9152)). Fixes vector-im/element-web#23036.
 * Fix composer padding ([\#9137](https://github.com/matrix-org/matrix-react-sdk/pull/9137)). Fixes vector-im/element-web#22992.
 * Fix highlights not being applied to plaintext messages ([\#9126](https://github.com/matrix-org/matrix-react-sdk/pull/9126)). Fixes vector-im/element-web#22787.
 * Fix dismissing edit composer when change was undone ([\#9109](https://github.com/matrix-org/matrix-react-sdk/pull/9109)). Fixes vector-im/element-web#22932.
 * 1-to-1 DM rooms with bots now act like DM rooms instead of multi-user-rooms before ([\#9124](https://github.com/matrix-org/matrix-react-sdk/pull/9124)). Fixes vector-im/element-web#22894.
 * Apply inline start padding to selected lines on modern layout only ([\#9006](https://github.com/matrix-org/matrix-react-sdk/pull/9006)). Fixes vector-im/element-web#22768. Contributed by @luixxiul.
 * Peek into world-readable rooms from spotlight ([\#9115](https://github.com/matrix-org/matrix-react-sdk/pull/9115)). Fixes vector-im/element-web#22862.
 * Use default styling on nested numbered lists due to MD being sensitive ([\#9110](https://github.com/matrix-org/matrix-react-sdk/pull/9110)). Fixes vector-im/element-web#22935.
 * Fix replying using chat effect commands ([\#9101](https://github.com/matrix-org/matrix-react-sdk/pull/9101)). Fixes vector-im/element-web#22824.

Changes in [1.11.2](https://github.com/vector-im/element-desktop/releases/tag/v1.11.2) (2022-08-03)
===================================================================================================

## ✨ Features
 * Live location share -  focus on user location on list item click ([\#9051](https://github.com/matrix-org/matrix-react-sdk/pull/9051)). Contributed by @kerryarchibald.
 * Live location sharing - don't trigger unread counts for beacon location events ([\#9071](https://github.com/matrix-org/matrix-react-sdk/pull/9071)). Contributed by @kerryarchibald.
 * Support for sending voice messages as replies and in threads ([\#9097](https://github.com/matrix-org/matrix-react-sdk/pull/9097)). Fixes vector-im/element-web#22031.
 * Add `Reply in thread` button to the right-click message context-menu ([\#9004](https://github.com/matrix-org/matrix-react-sdk/pull/9004)). Fixes vector-im/element-web#22745.
 * Starred_Messages_Feature_Contd_II/Outreachy ([\#9086](https://github.com/matrix-org/matrix-react-sdk/pull/9086)).
 * Use "frequently used emojis" for autocompletion in composer ([\#8998](https://github.com/matrix-org/matrix-react-sdk/pull/8998)). Fixes vector-im/element-web#18978. Contributed by @grimhilt.
 * Improve clickability of view source event toggle button  ([\#9068](https://github.com/matrix-org/matrix-react-sdk/pull/9068)). Fixes vector-im/element-web#21856. Contributed by @luixxiul.
 * Improve clickability of "collapse" link button on bubble layout ([\#9037](https://github.com/matrix-org/matrix-react-sdk/pull/9037)). Fixes vector-im/element-web#22864. Contributed by @luixxiul.
 * Starred_Messages_Feature/Outreachy ([\#8842](https://github.com/matrix-org/matrix-react-sdk/pull/8842)).
 * Implement Use Case Selection screen ([\#8984](https://github.com/matrix-org/matrix-react-sdk/pull/8984)). Contributed by @justjanne.
 * Live location share - handle insufficient permissions in location sharing ([\#9047](https://github.com/matrix-org/matrix-react-sdk/pull/9047)). Contributed by @kerryarchibald.
 * Improve _FilePanel.scss ([\#9031](https://github.com/matrix-org/matrix-react-sdk/pull/9031)). Contributed by @luixxiul.
 * Improve spotlight accessibility by adding context menus ([\#8907](https://github.com/matrix-org/matrix-react-sdk/pull/8907)). Fixes vector-im/element-web#20875 and vector-im/element-web#22675. Contributed by @justjanne.

## 🐛 Bug Fixes
 * Replace mask-images with svg components in MessageActionBar ([\#9088](https://github.com/matrix-org/matrix-react-sdk/pull/9088)). Fixes vector-im/element-web#22912. Contributed by @kerryarchibald.
 * Unbreak in-app permalink tooltips ([\#9087](https://github.com/matrix-org/matrix-react-sdk/pull/9087)). Fixes vector-im/element-web#22874.
 * Show a back button when viewing a space member ([\#9095](https://github.com/matrix-org/matrix-react-sdk/pull/9095)). Fixes vector-im/element-web#22898.
 * Align the right edge of info tile lines with normal ones on IRC layout ([\#9058](https://github.com/matrix-org/matrix-react-sdk/pull/9058)). Fixes vector-im/element-web#22871. Contributed by @luixxiul.
 * Prevent email verification from overriding existing sessions ([\#9075](https://github.com/matrix-org/matrix-react-sdk/pull/9075)). Fixes vector-im/element-web#22881. Contributed by @justjanne.
 * Fix wrong buttons being used when exploring public rooms ([\#9062](https://github.com/matrix-org/matrix-react-sdk/pull/9062)). Fixes vector-im/element-web#22862.
 * Re-add padding to generic event list summary on IRC layout ([\#9063](https://github.com/matrix-org/matrix-react-sdk/pull/9063)). Fixes vector-im/element-web#22869. Contributed by @luixxiul.
 * Joining federated rooms via the spotlight search should no longer cause a "No known servers" error. ([\#9055](https://github.com/matrix-org/matrix-react-sdk/pull/9055)). Fixes vector-im/element-web#22845. Contributed by @Half-Shot.

Changes in [1.11.1](https://github.com/vector-im/element-desktop/releases/tag/v1.11.1) (2022-07-26)
===================================================================================================

## ✨ Features
 * Enable URL tooltips on hover for Element Desktop ([\#22286](https://github.com/vector-im/element-web/pull/22286)). Fixes undefined/element-web#6532.
 * Hide screenshare button in video rooms on Desktop ([\#9045](https://github.com/matrix-org/matrix-react-sdk/pull/9045)).
 * Add a developer command to reset Megolm and Olm sessions ([\#9044](https://github.com/matrix-org/matrix-react-sdk/pull/9044)).
 * add spaces to TileErrorBoundary ([\#9012](https://github.com/matrix-org/matrix-react-sdk/pull/9012)). Contributed by @HarHarLinks.
 * Location sharing - add localised strings to map ([\#9025](https://github.com/matrix-org/matrix-react-sdk/pull/9025)). Fixes vector-im/element-web#21443. Contributed by @kerryarchibald.
 * Added trim to ignore whitespaces in email check ([\#9027](https://github.com/matrix-org/matrix-react-sdk/pull/9027)). Contributed by @ankur12-1610.
 * Improve _GenericEventListSummary.scss ([\#9005](https://github.com/matrix-org/matrix-react-sdk/pull/9005)). Contributed by @luixxiul.
 * Live location share - tiles without tile server (PSG-591) ([\#8962](https://github.com/matrix-org/matrix-react-sdk/pull/8962)). Contributed by @kerryarchibald.
 * Add option to display tooltip on link hover ([\#8394](https://github.com/matrix-org/matrix-react-sdk/pull/8394)). Fixes vector-im/element-web#21907.
 * Support a module API surface for custom functionality ([\#8246](https://github.com/matrix-org/matrix-react-sdk/pull/8246)).
 * Adjust encryption copy when creating a video room ([\#8989](https://github.com/matrix-org/matrix-react-sdk/pull/8989)). Fixes vector-im/element-web#22737.
 * Add bidirectonal isolation for pills ([\#8985](https://github.com/matrix-org/matrix-react-sdk/pull/8985)). Contributed by @sha-265.
 * Delabs `Show current avatar and name for users in message history` ([\#8764](https://github.com/matrix-org/matrix-react-sdk/pull/8764)). Fixes vector-im/element-web#22336.
 * Live location share - open latest location in map site ([\#8981](https://github.com/matrix-org/matrix-react-sdk/pull/8981)). Contributed by @kerryarchibald.
 * Improve LinkPreviewWidget ([\#8881](https://github.com/matrix-org/matrix-react-sdk/pull/8881)). Fixes vector-im/element-web#22634. Contributed by @luixxiul.
 * Render HTML topics in rooms on space home ([\#8939](https://github.com/matrix-org/matrix-react-sdk/pull/8939)).
 * Hide timestamp on event tiles being edited on every layout ([\#8956](https://github.com/matrix-org/matrix-react-sdk/pull/8956)). Contributed by @luixxiul.
 * Introduce new copy icon ([\#8942](https://github.com/matrix-org/matrix-react-sdk/pull/8942)).
 * Allow finding group DMs by members in spotlight ([\#8922](https://github.com/matrix-org/matrix-react-sdk/pull/8922)). Fixes vector-im/element-web#22564. Contributed by @justjanne.
 * Live location share - explicitly stop beacons replaced beacons ([\#8933](https://github.com/matrix-org/matrix-react-sdk/pull/8933)). Contributed by @kerryarchibald.
 * Remove unpin from widget kebab menu ([\#8924](https://github.com/matrix-org/matrix-react-sdk/pull/8924)).
 * Live location share - redact related locations on beacon redaction ([\#8926](https://github.com/matrix-org/matrix-react-sdk/pull/8926)). Contributed by @kerryarchibald.
 * Live location share - disallow message pinning ([\#8928](https://github.com/matrix-org/matrix-react-sdk/pull/8928)). Contributed by @kerryarchibald.

## 🐛 Bug Fixes
 * Fix manual update checks not working after being dismissed ([\#388](https://github.com/vector-im/element-desktop/pull/388)). Fixes vector-im/element-web#22795.
 * Don't check for updates if we already have one downloaded and queued ([\#386](https://github.com/vector-im/element-desktop/pull/386)).
 * Fix default file name in save-image-as ([\#385](https://github.com/vector-im/element-desktop/pull/385)). Fixes vector-im/element-web#20838.
 * Remove the ability to hide yourself in video rooms ([\#22806](https://github.com/vector-im/element-web/pull/22806)). Fixes vector-im/element-web#22805.
 * Unbreak in-app permalink tooltips  ([\#9100](https://github.com/matrix-org/matrix-react-sdk/pull/9100)).
 * Add space for the stroke on message editor on IRC layout ([\#9030](https://github.com/matrix-org/matrix-react-sdk/pull/9030)). Fixes vector-im/element-web#22785. Contributed by @luixxiul.
 * Fix pinned messages not re-linkifying on edit ([\#9042](https://github.com/matrix-org/matrix-react-sdk/pull/9042)). Fixes vector-im/element-web#22726.
 * Don't unnecessarily persist the host signup dialog ([\#9043](https://github.com/matrix-org/matrix-react-sdk/pull/9043)). Fixes vector-im/element-web#22778.
 * Fix URL previews causing messages to become unrenderable ([\#9028](https://github.com/matrix-org/matrix-react-sdk/pull/9028)). Fixes vector-im/element-web#22766.
 * Fix event list summaries including invalid events ([\#9041](https://github.com/matrix-org/matrix-react-sdk/pull/9041)). Fixes vector-im/element-web#22790.
 * Correct accessibility labels for unread rooms in spotlight ([\#9003](https://github.com/matrix-org/matrix-react-sdk/pull/9003)). Contributed by @justjanne.
 * Enable search strings highlight on bubble layout ([\#9032](https://github.com/matrix-org/matrix-react-sdk/pull/9032)). Fixes vector-im/element-web#22786. Contributed by @luixxiul.
 * Unbreak URL preview for formatted links with tooltips ([\#9022](https://github.com/matrix-org/matrix-react-sdk/pull/9022)). Fixes vector-im/element-web#22764.
 * Re-add margin to tiles based on EventTileBubble ([\#9015](https://github.com/matrix-org/matrix-react-sdk/pull/9015)). Fixes vector-im/element-web#22772. Contributed by @luixxiul.
 * Fix Shortcut prompt for Search showing in minimized Roomlist ([\#9014](https://github.com/matrix-org/matrix-react-sdk/pull/9014)). Fixes vector-im/element-web#22739. Contributed by @justjanne.
 * Fix avatar position on event info line for hidden events on a thread ([\#9019](https://github.com/matrix-org/matrix-react-sdk/pull/9019)). Fixes vector-im/element-web#22777. Contributed by @luixxiul.
 * Fix lost padding of event tile info line ([\#9009](https://github.com/matrix-org/matrix-react-sdk/pull/9009)). Fixes vector-im/element-web#22754 and vector-im/element-web#22759. Contributed by @luixxiul.
 * Align verification bubble with normal event tiles on IRC layout ([\#9001](https://github.com/matrix-org/matrix-react-sdk/pull/9001)). Fixes vector-im/element-web#22758. Contributed by @luixxiul.
 * Ensure timestamp on generic event list summary is not hidden from TimelineCard ([\#9000](https://github.com/matrix-org/matrix-react-sdk/pull/9000)). Fixes vector-im/element-web#22755. Contributed by @luixxiul.
 * Fix headings margin on security user settings tab ([\#8826](https://github.com/matrix-org/matrix-react-sdk/pull/8826)). Contributed by @luixxiul.
 * Fix timestamp position on file panel ([\#8976](https://github.com/matrix-org/matrix-react-sdk/pull/8976)). Fixes vector-im/element-web#22718. Contributed by @luixxiul.
 * Stop using :not() pseudo class for mx_GenericEventListSummary ([\#8944](https://github.com/matrix-org/matrix-react-sdk/pull/8944)). Fixes vector-im/element-web#22602. Contributed by @luixxiul.
 * Don't show the same user twice in Spotlight ([\#8978](https://github.com/matrix-org/matrix-react-sdk/pull/8978)). Fixes vector-im/element-web#22697.
 * Align the right edge of expand / collapse link buttons of generic event list summary in bubble layout with a variable ([\#8992](https://github.com/matrix-org/matrix-react-sdk/pull/8992)). Fixes vector-im/element-web#22743. Contributed by @luixxiul.
 * Display own avatars on search results panel in bubble layout ([\#8990](https://github.com/matrix-org/matrix-react-sdk/pull/8990)). Contributed by @luixxiul.
 * Fix text flow of thread summary content on threads list ([\#8991](https://github.com/matrix-org/matrix-react-sdk/pull/8991)). Fixes vector-im/element-web#22738. Contributed by @luixxiul.
 * Fix the size of the clickable area of images ([\#8987](https://github.com/matrix-org/matrix-react-sdk/pull/8987)). Fixes vector-im/element-web#22282.
 * Fix font size of MessageTimestamp on TimelineCard ([\#8950](https://github.com/matrix-org/matrix-react-sdk/pull/8950)). Contributed by @luixxiul.
 * Improve security room settings tab style rules ([\#8844](https://github.com/matrix-org/matrix-react-sdk/pull/8844)). Fixes vector-im/element-web#22575. Contributed by @luixxiul.
 * Align E2E icon and avatar of info tile in compact modern layout ([\#8965](https://github.com/matrix-org/matrix-react-sdk/pull/8965)). Fixes vector-im/element-web#22652. Contributed by @luixxiul.
 * Fix clickable area of general event list summary toggle ([\#8979](https://github.com/matrix-org/matrix-react-sdk/pull/8979)). Fixes vector-im/element-web#22722. Contributed by @luixxiul.
 * Fix resizing room topic ([\#8966](https://github.com/matrix-org/matrix-react-sdk/pull/8966)). Fixes vector-im/element-web#22689.
 * Dismiss the search dialogue when starting a DM ([\#8967](https://github.com/matrix-org/matrix-react-sdk/pull/8967)). Fixes vector-im/element-web#22700.
 * Fix "greyed out" text style inconsistency on search result panel ([\#8974](https://github.com/matrix-org/matrix-react-sdk/pull/8974)). Contributed by @luixxiul.
 * Add top padding to EventTilePreview loader ([\#8977](https://github.com/matrix-org/matrix-react-sdk/pull/8977)). Fixes vector-im/element-web#22719. Contributed by @luixxiul.
 * Fix read receipts group position on TimelineCard in compact modern/group layout ([\#8971](https://github.com/matrix-org/matrix-react-sdk/pull/8971)). Fixes vector-im/element-web#22715. Contributed by @luixxiul.
 * Fix calls on homeservers without the unstable thirdparty endpoints. ([\#8931](https://github.com/matrix-org/matrix-react-sdk/pull/8931)). Fixes vector-im/element-web#21680. Contributed by @deepbluev7.
 * Enable ReplyChain text to be expanded on IRC layout ([\#8959](https://github.com/matrix-org/matrix-react-sdk/pull/8959)). Fixes vector-im/element-web#22709. Contributed by @luixxiul.
 * Fix hidden timestamp on message edit history dialog ([\#8955](https://github.com/matrix-org/matrix-react-sdk/pull/8955)). Fixes vector-im/element-web#22701. Contributed by @luixxiul.
 * Enable ReplyChain text to be expanded on bubble layout ([\#8958](https://github.com/matrix-org/matrix-react-sdk/pull/8958)). Fixes vector-im/element-web#22709. Contributed by @luixxiul.
 * Fix expand/collapse state wrong in metaspaces ([\#8952](https://github.com/matrix-org/matrix-react-sdk/pull/8952)). Fixes vector-im/element-web#22632.
 * Location (live) share replies now provide a fallback content ([\#8949](https://github.com/matrix-org/matrix-react-sdk/pull/8949)).
 * Fix space settings not opening for script-created spaces ([\#8957](https://github.com/matrix-org/matrix-react-sdk/pull/8957)). Fixes vector-im/element-web#22703.
 * Respect `filename` field on `m.file` events ([\#8951](https://github.com/matrix-org/matrix-react-sdk/pull/8951)).
 * Fix PlatformSettingsHandler always returning true due to returning a Promise ([\#8954](https://github.com/matrix-org/matrix-react-sdk/pull/8954)). Fixes vector-im/element-web#22616.
 * Improve high-contrast support for spotlight ([\#8948](https://github.com/matrix-org/matrix-react-sdk/pull/8948)). Fixes vector-im/element-web#22481. Contributed by @justjanne.
 * Fix wrong assertions that all media events have a mimetype ([\#8946](https://github.com/matrix-org/matrix-react-sdk/pull/8946)). Fixes matrix-org/element-web-rageshakes#13727.
 * Make invite dialogue fixed height ([\#8934](https://github.com/matrix-org/matrix-react-sdk/pull/8934)). Fixes vector-im/element-web#22659.
 * Fix all megolm error reported as unknown ([\#8916](https://github.com/matrix-org/matrix-react-sdk/pull/8916)).
 * Remove line-height declarations from _ReplyTile.scss ([\#8932](https://github.com/matrix-org/matrix-react-sdk/pull/8932)). Fixes vector-im/element-web#22687. Contributed by @luixxiul.
 * Reduce video rooms log spam ([\#8913](https://github.com/matrix-org/matrix-react-sdk/pull/8913)).
 * Correct new search input’s rounded corners ([\#8921](https://github.com/matrix-org/matrix-react-sdk/pull/8921)). Fixes vector-im/element-web#22576. Contributed by @justjanne.
 * Align unread notification dot on threads list in compact modern=group layout ([\#8911](https://github.com/matrix-org/matrix-react-sdk/pull/8911)). Fixes vector-im/element-web#22677. Contributed by @luixxiul.

Changes in [1.11.0](https://github.com/vector-im/element-desktop/releases/tag/v1.11.0) (2022-07-05)
===================================================================================================

## 🚨 BREAKING CHANGES
 * Remove Piwik support ([\#8835](https://github.com/matrix-org/matrix-react-sdk/pull/8835)).

## ✨ Features
 * Support compilation on more Linux targets ([\#376](https://github.com/vector-im/element-desktop/pull/376)). Contributed by @jcgruenhage.
 * Document how to configure a custom `home.html`. ([\#21066](https://github.com/vector-im/element-web/pull/21066)). Contributed by @johannes-krude.
 * Move New Search Experience out of beta ([\#8859](https://github.com/matrix-org/matrix-react-sdk/pull/8859)). Contributed by @justjanne.
 * Switch video rooms to spotlight layout when in PiP mode ([\#8912](https://github.com/matrix-org/matrix-react-sdk/pull/8912)). Fixes vector-im/element-web#22574.
 * Live location sharing - render message deleted tile for redacted beacons ([\#8905](https://github.com/matrix-org/matrix-react-sdk/pull/8905)). Contributed by @kerryarchibald.
 * Improve view source dialog style ([\#8883](https://github.com/matrix-org/matrix-react-sdk/pull/8883)). Fixes vector-im/element-web#22636. Contributed by @luixxiul.
 * Improve integration manager dialog style ([\#8888](https://github.com/matrix-org/matrix-react-sdk/pull/8888)). Fixes vector-im/element-web#22642. Contributed by @luixxiul.
 * Implement MSC3827: Filtering of `/publicRooms` by room type ([\#8866](https://github.com/matrix-org/matrix-react-sdk/pull/8866)). Fixes vector-im/element-web#22578.
 * Show chat panel when opening a video room with unread messages ([\#8812](https://github.com/matrix-org/matrix-react-sdk/pull/8812)). Fixes vector-im/element-web#22527.
 * Live location share - forward latest location ([\#8860](https://github.com/matrix-org/matrix-react-sdk/pull/8860)). Contributed by @kerryarchibald.
 * Allow integration managers to validate user identity after opening ([\#8782](https://github.com/matrix-org/matrix-react-sdk/pull/8782)). Contributed by @Half-Shot.
 * Create a common header on right panel cards on BaseCard ([\#8808](https://github.com/matrix-org/matrix-react-sdk/pull/8808)). Contributed by @luixxiul.
 * Integrate searching public rooms and people into the new search experience ([\#8707](https://github.com/matrix-org/matrix-react-sdk/pull/8707)). Fixes vector-im/element-web#21354 and vector-im/element-web#19349. Contributed by @justjanne.
 * Bring back waveform for voice messages and retain seeking ([\#8843](https://github.com/matrix-org/matrix-react-sdk/pull/8843)). Fixes vector-im/element-web#21904.
 * Improve colors in settings  ([\#7283](https://github.com/matrix-org/matrix-react-sdk/pull/7283)).
 * Keep draft in composer when a slash command syntax errors ([\#8811](https://github.com/matrix-org/matrix-react-sdk/pull/8811)). Fixes vector-im/element-web#22384.
 * Release video rooms as a beta feature ([\#8431](https://github.com/matrix-org/matrix-react-sdk/pull/8431)).
 * Clarify logout key backup warning dialog. Contributed by @notramo. ([\#8741](https://github.com/matrix-org/matrix-react-sdk/pull/8741)). Fixes vector-im/element-web#15565. Contributed by @MadLittleMods.
 * Slightly improve the look of the `Message edits` dialog ([\#8763](https://github.com/matrix-org/matrix-react-sdk/pull/8763)). Fixes vector-im/element-web#22410.
 * Add support for MD / HTML in room topics ([\#8215](https://github.com/matrix-org/matrix-react-sdk/pull/8215)). Fixes vector-im/element-web#5180. Contributed by @Johennes.
 * Live location share - link to timeline tile from share warning ([\#8752](https://github.com/matrix-org/matrix-react-sdk/pull/8752)). Contributed by @kerryarchibald.
 * Improve composer visiblity ([\#8578](https://github.com/matrix-org/matrix-react-sdk/pull/8578)). Fixes vector-im/element-web#22072 and vector-im/element-web#17362.
 * Makes the avatar of the user menu non-draggable ([\#8765](https://github.com/matrix-org/matrix-react-sdk/pull/8765)). Contributed by @luixxiul.
 * Improve widget buttons behaviour and layout ([\#8734](https://github.com/matrix-org/matrix-react-sdk/pull/8734)).
 * Use AccessibleButton for 'Reset All' link button on SetupEncryptionBody ([\#8730](https://github.com/matrix-org/matrix-react-sdk/pull/8730)). Contributed by @luixxiul.
 * Adjust message timestamp position on TimelineCard in non-bubble layouts ([\#8745](https://github.com/matrix-org/matrix-react-sdk/pull/8745)). Fixes vector-im/element-web#22426. Contributed by @luixxiul.
 * Use AccessibleButton for 'In reply to' link button on ReplyChain ([\#8726](https://github.com/matrix-org/matrix-react-sdk/pull/8726)). Fixes vector-im/element-web#22407. Contributed by @luixxiul.
 * Live location share - enable reply and react to tiles ([\#8721](https://github.com/matrix-org/matrix-react-sdk/pull/8721)). Contributed by @kerryarchibald.
 * Change dash to em dash issues fixed ([\#8455](https://github.com/matrix-org/matrix-react-sdk/pull/8455)). Fixes vector-im/element-web#21895. Contributed by @goelesha.

## 🐛 Bug Fixes
 * Upgrade to Electron 19 ([\#372](https://github.com/vector-im/element-desktop/pull/372)). Fixes vector-im/element-web#21147.
 * Reduce video rooms log spam ([\#22665](https://github.com/vector-im/element-web/pull/22665)).
 * Connect to Jitsi unmuted by default ([\#22660](https://github.com/vector-im/element-web/pull/22660)). Fixes vector-im/element-web#22637.
 * Work around a Jitsi bug with display name encoding ([\#22525](https://github.com/vector-im/element-web/pull/22525)). Fixes vector-im/element-web#22521.
 * Make invite dialogue fixed height ([\#8945](https://github.com/matrix-org/matrix-react-sdk/pull/8945)).
 * Correct issue with tab order in new search experience ([\#8919](https://github.com/matrix-org/matrix-react-sdk/pull/8919)). Fixes vector-im/element-web#22670. Contributed by @justjanne.
 * Clicking location replies now redirects to the replied event instead of opening the map ([\#8918](https://github.com/matrix-org/matrix-react-sdk/pull/8918)). Fixes vector-im/element-web#22667.
 * Keep clicks on pills within the app ([\#8917](https://github.com/matrix-org/matrix-react-sdk/pull/8917)). Fixes vector-im/element-web#22653.
 * Don't overlap tile bubbles with timestamps in modern layout ([\#8908](https://github.com/matrix-org/matrix-react-sdk/pull/8908)). Fixes vector-im/element-web#22425.
 * Connect to Jitsi unmuted by default ([\#8909](https://github.com/matrix-org/matrix-react-sdk/pull/8909)).
 * Maximize width value of display name on TimelineCard with IRC/modern layout ([\#8904](https://github.com/matrix-org/matrix-react-sdk/pull/8904)). Fixes vector-im/element-web#22651. Contributed by @luixxiul.
 * Align the avatar and the display name on TimelineCard ([\#8900](https://github.com/matrix-org/matrix-react-sdk/pull/8900)). Contributed by @luixxiul.
 * Remove inline margin from reactions row on IRC layout ([\#8891](https://github.com/matrix-org/matrix-react-sdk/pull/8891)). Fixes vector-im/element-web#22644. Contributed by @luixxiul.
 * Align "From a thread" on search result panel on IRC layout ([\#8892](https://github.com/matrix-org/matrix-react-sdk/pull/8892)). Fixes vector-im/element-web#22645. Contributed by @luixxiul.
 * Display description of E2E advanced panel as subsection text ([\#8889](https://github.com/matrix-org/matrix-react-sdk/pull/8889)). Contributed by @luixxiul.
 * Remove inline end margin from images on file panel ([\#8886](https://github.com/matrix-org/matrix-react-sdk/pull/8886)). Fixes vector-im/element-web#22640. Contributed by @luixxiul.
 * Disable option to `Quote` when we don't have sufficient permissions ([\#8893](https://github.com/matrix-org/matrix-react-sdk/pull/8893)). Fixes vector-im/element-web#22643.
 * Add padding to font scaling loader for message bubble layout ([\#8875](https://github.com/matrix-org/matrix-react-sdk/pull/8875)). Fixes vector-im/element-web#22626. Contributed by @luixxiul.
 * Set 100% max-width to display name on reply tiles ([\#8867](https://github.com/matrix-org/matrix-react-sdk/pull/8867)). Fixes vector-im/element-web#22615. Contributed by @luixxiul.
 * Fix alignment of pill letter ([\#8874](https://github.com/matrix-org/matrix-react-sdk/pull/8874)). Fixes vector-im/element-web#22622. Contributed by @luixxiul.
 * Move the beta pill to the right side and display the pill on video room only ([\#8873](https://github.com/matrix-org/matrix-react-sdk/pull/8873)). Fixes vector-im/element-web#22619 and vector-im/element-web#22620. Contributed by @luixxiul.
 * Stop using absolute property to place beta pill on RoomPreviewCard ([\#8872](https://github.com/matrix-org/matrix-react-sdk/pull/8872)). Fixes vector-im/element-web#22617. Contributed by @luixxiul.
 * Make the pill text single line ([\#8744](https://github.com/matrix-org/matrix-react-sdk/pull/8744)). Fixes vector-im/element-web#22427. Contributed by @luixxiul.
 * Hide overflow of public room description on spotlight dialog result ([\#8870](https://github.com/matrix-org/matrix-react-sdk/pull/8870)). Contributed by @luixxiul.
 * Fix position of message action bar on the info tile on TimelineCard in message bubble layout ([\#8865](https://github.com/matrix-org/matrix-react-sdk/pull/8865)). Fixes vector-im/element-web#22614. Contributed by @luixxiul.
 * Remove inline start margin from display name on reply tiles on TimelineCard ([\#8864](https://github.com/matrix-org/matrix-react-sdk/pull/8864)). Fixes vector-im/element-web#22613. Contributed by @luixxiul.
 * Improve homeserver dropdown dialog styling ([\#8850](https://github.com/matrix-org/matrix-react-sdk/pull/8850)). Fixes vector-im/element-web#22552. Contributed by @justjanne.
 * Fix crash when drawing blurHash for portrait videos PSB-139 ([\#8855](https://github.com/matrix-org/matrix-react-sdk/pull/8855)). Fixes vector-im/element-web#22597. Contributed by @andybalaam.
 * Fix grid blowout on pinned event tiles ([\#8816](https://github.com/matrix-org/matrix-react-sdk/pull/8816)). Fixes vector-im/element-web#22543. Contributed by @luixxiul.
 * Fix temporary sync errors if there's weird settings stored in account data ([\#8857](https://github.com/matrix-org/matrix-react-sdk/pull/8857)).
 * Fix reactions row overflow and gap between reactions ([\#8813](https://github.com/matrix-org/matrix-react-sdk/pull/8813)). Fixes vector-im/element-web#22093. Contributed by @luixxiul.
 * Fix issues with the Create new room button in Spotlight ([\#8851](https://github.com/matrix-org/matrix-react-sdk/pull/8851)). Contributed by @justjanne.
 * Remove margin from E2E icon between avatar and hidden event ([\#8584](https://github.com/matrix-org/matrix-react-sdk/pull/8584)). Fixes vector-im/element-web#22186. Contributed by @luixxiul.
 * Fix waveform on a message bubble ([\#8852](https://github.com/matrix-org/matrix-react-sdk/pull/8852)). Contributed by @luixxiul.
 * Location sharing maps are now loaded after reconnection ([\#8848](https://github.com/matrix-org/matrix-react-sdk/pull/8848)). Fixes vector-im/element-web#20993.
 * Update the avatar mask so it doesn’t cut off spaces’ avatars anymore ([\#8849](https://github.com/matrix-org/matrix-react-sdk/pull/8849)). Contributed by @justjanne.
 * Add a bit of safety around timestamp handling for threads ([\#8845](https://github.com/matrix-org/matrix-react-sdk/pull/8845)).
 * Remove top margin from event tile on a narrow viewport ([\#8814](https://github.com/matrix-org/matrix-react-sdk/pull/8814)). Contributed by @luixxiul.
 * Fix keyboard shortcuts on settings tab being wrapped ([\#8825](https://github.com/matrix-org/matrix-react-sdk/pull/8825)). Fixes vector-im/element-web#22547. Contributed by @luixxiul.
 * Add try-catch around blurhash loading ([\#8830](https://github.com/matrix-org/matrix-react-sdk/pull/8830)).
 * Prevent new composer from overflowing from non-breakable text ([\#8829](https://github.com/matrix-org/matrix-react-sdk/pull/8829)). Fixes vector-im/element-web#22507. Contributed by @justjanne.
 * Use common subheading on sidebar user settings tab ([\#8823](https://github.com/matrix-org/matrix-react-sdk/pull/8823)). Contributed by @luixxiul.
 * Fix clickable area of advanced toggle on appearance user settings tab ([\#8820](https://github.com/matrix-org/matrix-react-sdk/pull/8820)). Fixes vector-im/element-web#22546. Contributed by @luixxiul.
 * Disable redacting reactions if we don't have sufficient permissions  ([\#8767](https://github.com/matrix-org/matrix-react-sdk/pull/8767)). Fixes vector-im/element-web#22262.
 * Update the live timeline when the JS SDK resets it ([\#8806](https://github.com/matrix-org/matrix-react-sdk/pull/8806)). Fixes vector-im/element-web#22421.
 * Fix flex blowout on image reply ([\#8809](https://github.com/matrix-org/matrix-react-sdk/pull/8809)). Fixes vector-im/element-web#22509 and vector-im/element-web#22510. Contributed by @luixxiul.
 * Enable background color on hover for chat panel and thread panel ([\#8644](https://github.com/matrix-org/matrix-react-sdk/pull/8644)). Fixes vector-im/element-web#22273. Contributed by @luixxiul.
 * Fix #20026: send read marker as soon as we change it ([\#8802](https://github.com/matrix-org/matrix-react-sdk/pull/8802)). Fixes vector-im/element-web#20026. Contributed by @andybalaam.
 * Allow AppTiles to shrink as much as necessary ([\#8805](https://github.com/matrix-org/matrix-react-sdk/pull/8805)). Fixes vector-im/element-web#22499.
 * Make widgets in video rooms immutable again ([\#8803](https://github.com/matrix-org/matrix-react-sdk/pull/8803)). Fixes vector-im/element-web#22497.
 * Use MessageActionBar style declarations on pinned message card ([\#8757](https://github.com/matrix-org/matrix-react-sdk/pull/8757)). Fixes vector-im/element-web#22444. Contributed by @luixxiul.
 * Expire video member events after 1 hour ([\#8776](https://github.com/matrix-org/matrix-react-sdk/pull/8776)).
 * Name lists on invite dialog ([\#8046](https://github.com/matrix-org/matrix-react-sdk/pull/8046)). Fixes vector-im/element-web#21400 and vector-im/element-web#19463. Contributed by @luixxiul.
 * Live location share - show loading UI for beacons with start timestamp in the future ([\#8775](https://github.com/matrix-org/matrix-react-sdk/pull/8775)). Fixes vector-im/element-web#22437. Contributed by @kerryarchibald.
 * Fix scroll jump issue with the composer ([\#8788](https://github.com/matrix-org/matrix-react-sdk/pull/8788)). Fixes vector-im/element-web#22464.
 * Fix the incorrect nesting of download button on MessageActionBar ([\#8785](https://github.com/matrix-org/matrix-react-sdk/pull/8785)). Contributed by @luixxiul.
 * Revert link color change in composer ([\#8784](https://github.com/matrix-org/matrix-react-sdk/pull/8784)). Fixes vector-im/element-web#22468.
 * Fix 'Logout' inline link on the splash screen ([\#8770](https://github.com/matrix-org/matrix-react-sdk/pull/8770)). Fixes vector-im/element-web#22449. Contributed by @luixxiul.
 * Fix disappearing widget poput button when changing the widget layout ([\#8754](https://github.com/matrix-org/matrix-react-sdk/pull/8754)).
 * Reduce gutter with the new read receipt UI ([\#8736](https://github.com/matrix-org/matrix-react-sdk/pull/8736)). Fixes vector-im/element-web#21890.
 * Add ellipsis effect to hidden beacon status ([\#8755](https://github.com/matrix-org/matrix-react-sdk/pull/8755)). Fixes vector-im/element-web#22441. Contributed by @luixxiul.
 * Make the pill on the basic message composer compatible with display name in RTL languages ([\#8758](https://github.com/matrix-org/matrix-react-sdk/pull/8758)). Fixes vector-im/element-web#22445. Contributed by @luixxiul.
 * Prevent the banner text from being selected, replacing the spacing values with the variable ([\#8756](https://github.com/matrix-org/matrix-react-sdk/pull/8756)). Fixes vector-im/element-web#22442. Contributed by @luixxiul.
 * Ensure the first device on a newly-registered account gets cross-signed properly ([\#8750](https://github.com/matrix-org/matrix-react-sdk/pull/8750)). Fixes vector-im/element-web#21977. Contributed by @duxovni.
 * Hide live location option in threads composer ([\#8746](https://github.com/matrix-org/matrix-react-sdk/pull/8746)). Fixes vector-im/element-web#22424. Contributed by @kerryarchibald.
 * Make sure MessageTimestamp is not hidden by EventTile_line on TimelineCard ([\#8748](https://github.com/matrix-org/matrix-react-sdk/pull/8748)). Contributed by @luixxiul.
 * Make PiP motion smoother and react to window resizes correctly ([\#8747](https://github.com/matrix-org/matrix-react-sdk/pull/8747)). Fixes vector-im/element-web#22292.
 * Prevent Invite and DevTools dialogs from being cut off ([\#8646](https://github.com/matrix-org/matrix-react-sdk/pull/8646)). Fixes vector-im/element-web#20911 and undefined/matrix-react-sdk#8165. Contributed by @justjanne.
 * Squish event bubble tiles less ([\#8740](https://github.com/matrix-org/matrix-react-sdk/pull/8740)).
 * Use random widget IDs for video rooms ([\#8739](https://github.com/matrix-org/matrix-react-sdk/pull/8739)). Fixes vector-im/element-web#22417.
 * Fix read avatars overflow from the right chat panel with a maximized widget on bubble message layout ([\#8470](https://github.com/matrix-org/matrix-react-sdk/pull/8470)). Contributed by @luixxiul.
 * Fix `CallView` crash ([\#8735](https://github.com/matrix-org/matrix-react-sdk/pull/8735)). Fixes vector-im/element-web#22394.

Changes in [1.10.15](https://github.com/vector-im/element-desktop/releases/tag/v1.10.15) (2022-06-14)
=====================================================================================================

## 🐛 Bug Fixes
 * Fix missing element desktop preferences ([\#8798](https://github.com/matrix-org/matrix-react-sdk/pull/8798)). Contributed by @t3chguy.

Changes in [1.10.14](https://github.com/vector-im/element-desktop/releases/tag/v1.10.14) (2022-06-07)
=====================================================================================================

## ✨ Features
 * Builds Windows 32-bit builds once more! ([\#369](https://github.com/vector-im/element-desktop/pull/369)). Fixes vector-im/element-web#13175.
 * Option to disable hardware acceleration ([\#365](https://github.com/vector-im/element-desktop/pull/365)). Fixes vector-im/element-web#13648. Contributed by @novocaine.
 * Make Lao translation available ([\#22358](https://github.com/vector-im/element-web/pull/22358)). Fixes vector-im/element-web#22327.
 * Option to disable hardware acceleration on Element Desktop ([\#22295](https://github.com/vector-im/element-web/pull/22295)). Contributed by @novocaine.
 * Configure custom home.html via `.well-known/matrix/client["io.element.embedded_pages"]["home_url"]` for all your element-web/desktop users ([\#7790](https://github.com/matrix-org/matrix-react-sdk/pull/7790)). Contributed by @johannes-krude.
 * Live location sharing - open location in OpenStreetMap ([\#8695](https://github.com/matrix-org/matrix-react-sdk/pull/8695)). Contributed by @kerryarchibald.
 * Show a dialog when Jitsi encounters an error ([\#8701](https://github.com/matrix-org/matrix-react-sdk/pull/8701)). Fixes vector-im/element-web#22284.
 * Add support for setting the `avatar_url` of widgets by integration managers. ([\#8550](https://github.com/matrix-org/matrix-react-sdk/pull/8550)). Contributed by @Fox32.
 * Add an option to ignore (block) a user when reporting their events ([\#8471](https://github.com/matrix-org/matrix-react-sdk/pull/8471)).
 * Add the option to disable hardware acceleration ([\#8655](https://github.com/matrix-org/matrix-react-sdk/pull/8655)). Contributed by @novocaine.
 * Slightly better presentation of read receipts to screen reader users ([\#8662](https://github.com/matrix-org/matrix-react-sdk/pull/8662)). Fixes vector-im/element-web#22293. Contributed by @pvagner.
 * Add jump to related event context menu item ([\#6775](https://github.com/matrix-org/matrix-react-sdk/pull/6775)). Fixes vector-im/element-web#19883.
 * Add public room directory hook ([\#8626](https://github.com/matrix-org/matrix-react-sdk/pull/8626)).

## 🐛 Bug Fixes
 * Revert back to using libsqlcipher0 for Debian & Ubuntu packages of Desktop ([\#367](https://github.com/vector-im/element-desktop/pull/367)). Fixes vector-im/element-web#22325.
 * Stop Jitsi if we time out while connecting to a video room ([\#22301](https://github.com/vector-im/element-web/pull/22301)). Fixes vector-im/element-web#22283.
 * Remove inline margin from UTD error message inside a reply tile on ThreadView ([\#8708](https://github.com/matrix-org/matrix-react-sdk/pull/8708)). Fixes vector-im/element-web#22376. Contributed by @luixxiul.
 * Move unread notification dots of the threads list to the expected position ([\#8700](https://github.com/matrix-org/matrix-react-sdk/pull/8700)). Fixes vector-im/element-web#22350. Contributed by @luixxiul.
 * Prevent overflow of grid items on a bubble with UTD generally ([\#8697](https://github.com/matrix-org/matrix-react-sdk/pull/8697)). Contributed by @luixxiul.
 * Create 'Unable To Decrypt' grid layout for hidden events on a bubble layout ([\#8704](https://github.com/matrix-org/matrix-react-sdk/pull/8704)). Fixes vector-im/element-web#22365. Contributed by @luixxiul.
 * Fix - AccessibleButton does not set disabled attribute ([\#8682](https://github.com/matrix-org/matrix-react-sdk/pull/8682)). Contributed by @kerryarchibald.
 * Fix font not resetting when logging out ([\#8670](https://github.com/matrix-org/matrix-react-sdk/pull/8670)). Fixes vector-im/element-web#17228.
 * Fix local aliases section of room settings not working for some homeservers (ie ([\#8698](https://github.com/matrix-org/matrix-react-sdk/pull/8698)). Fixes vector-im/element-web#22337.
 * Align EventTile_line with display name on message bubble ([\#8692](https://github.com/matrix-org/matrix-react-sdk/pull/8692)). Fixes vector-im/element-web#22343. Contributed by @luixxiul.
 * Convert references to direct chat -> direct message ([\#8694](https://github.com/matrix-org/matrix-react-sdk/pull/8694)). Contributed by @novocaine.
 * Improve combining diacritics for U+20D0 to U+20F0 in Chrome ([\#8687](https://github.com/matrix-org/matrix-react-sdk/pull/8687)).
 * Make the empty thread panel fill BaseCard ([\#8690](https://github.com/matrix-org/matrix-react-sdk/pull/8690)). Fixes vector-im/element-web#22338. Contributed by @luixxiul.
 * Fix edge case around composer handling gendered facepalm emoji ([\#8686](https://github.com/matrix-org/matrix-react-sdk/pull/8686)).
 * Fix a grid blowout due to nowrap displayName on a bubble with UTD ([\#8688](https://github.com/matrix-org/matrix-react-sdk/pull/8688)). Fixes vector-im/element-web#21914. Contributed by @luixxiul.
 * Apply the same max-width to image tile on the thread timeline as message bubble ([\#8669](https://github.com/matrix-org/matrix-react-sdk/pull/8669)). Fixes vector-im/element-web#22313. Contributed by @luixxiul.
 * Fix dropdown button size for picture-in-picture CallView ([\#8680](https://github.com/matrix-org/matrix-react-sdk/pull/8680)). Fixes vector-im/element-web#22316. Contributed by @luixxiul.
 * Live location sharing - fix square border for image-less avatar (PSF-1052) ([\#8679](https://github.com/matrix-org/matrix-react-sdk/pull/8679)). Contributed by @kerryarchibald.
 * Stop connecting to a video room if the widget messaging disappears ([\#8660](https://github.com/matrix-org/matrix-react-sdk/pull/8660)).
 * Fix file button and audio player overflowing from message bubble ([\#8666](https://github.com/matrix-org/matrix-react-sdk/pull/8666)). Fixes vector-im/element-web#22308. Contributed by @luixxiul.
 * Don't show broken composer format bar when selection is whitespace ([\#8673](https://github.com/matrix-org/matrix-react-sdk/pull/8673)). Fixes vector-im/element-web#10788.
 * Fix media upload http 413 handling ([\#8674](https://github.com/matrix-org/matrix-react-sdk/pull/8674)).
 * Fix emoji picker for editing thread responses ([\#8671](https://github.com/matrix-org/matrix-react-sdk/pull/8671)). Fixes matrix-org/element-web-rageshakes#13129.
 * Map attribution while sharing live location is now visible ([\#8621](https://github.com/matrix-org/matrix-react-sdk/pull/8621)). Fixes vector-im/element-web#22236. Contributed by @weeman1337.
 * Fix info tile overlapping the time stamp on TimelineCard ([\#8639](https://github.com/matrix-org/matrix-react-sdk/pull/8639)). Fixes vector-im/element-web#22256. Contributed by @luixxiul.
 * Fix position of wide images on IRC / modern layout ([\#8667](https://github.com/matrix-org/matrix-react-sdk/pull/8667)). Fixes vector-im/element-web#22309. Contributed by @luixxiul.
 * Fix other user's displayName being wrapped on the bubble message layout ([\#8456](https://github.com/matrix-org/matrix-react-sdk/pull/8456)). Fixes vector-im/element-web#22004. Contributed by @luixxiul.
 * Set spacing declarations to elements in mx_EventTile_mediaLine ([\#8665](https://github.com/matrix-org/matrix-react-sdk/pull/8665)). Fixes vector-im/element-web#22307. Contributed by @luixxiul.
 * Fix wide image overflowing from the thumbnail container ([\#8663](https://github.com/matrix-org/matrix-react-sdk/pull/8663)). Fixes vector-im/element-web#22303. Contributed by @luixxiul.
 * Fix styles of "Show all" link button on ReactionsRow ([\#8658](https://github.com/matrix-org/matrix-react-sdk/pull/8658)). Fixes vector-im/element-web#22300. Contributed by @luixxiul.
 * Automatically log in after registration ([\#8654](https://github.com/matrix-org/matrix-react-sdk/pull/8654)). Fixes vector-im/element-web#19305. Contributed by @justjanne.
 * Fix offline status in window title not working reliably ([\#8656](https://github.com/matrix-org/matrix-react-sdk/pull/8656)).
 * Align input area with event body's first letter in a thread on IRC/modern layout ([\#8636](https://github.com/matrix-org/matrix-react-sdk/pull/8636)). Fixes vector-im/element-web#22252. Contributed by @luixxiul.
 * Fix crash on null idp for SSO buttons ([\#8650](https://github.com/matrix-org/matrix-react-sdk/pull/8650)). Contributed by @hughns.
 * Don't open the regular browser or our context menu on right-clicking the `Options` button in the message action bar ([\#8648](https://github.com/matrix-org/matrix-react-sdk/pull/8648)). Fixes vector-im/element-web#22279.
 * Show notifications even when Element is focused ([\#8590](https://github.com/matrix-org/matrix-react-sdk/pull/8590)). Contributed by @sumnerevans.
 * Remove padding from the buttons on edit message composer of a event tile on a thread ([\#8632](https://github.com/matrix-org/matrix-react-sdk/pull/8632)). Contributed by @luixxiul.
 * ensure metaspace changes correctly notify listeners ([\#8611](https://github.com/matrix-org/matrix-react-sdk/pull/8611)). Fixes vector-im/element-web#21006. Contributed by @justjanne.
 * Hide image banner on stickers, they have a tooltip already ([\#8641](https://github.com/matrix-org/matrix-react-sdk/pull/8641)). Fixes vector-im/element-web#22244.
 * Adjust EditMessageComposer style declarations ([\#8631](https://github.com/matrix-org/matrix-react-sdk/pull/8631)). Fixes vector-im/element-web#22231. Contributed by @luixxiul.

Changes in [1.10.13](https://github.com/vector-im/element-desktop/releases/tag/v1.10.13) (2022-05-24)
=====================================================================================================

## ✨ Features
 * Go to space landing page when clicking on a selected space ([\#6442](https://github.com/matrix-org/matrix-react-sdk/pull/6442)). Fixes vector-im/element-web#20296.
 * Fall back to untranslated string rather than showing missing translation error ([\#8609](https://github.com/matrix-org/matrix-react-sdk/pull/8609)).
 * Show file name and size on images on hover ([\#6511](https://github.com/matrix-org/matrix-react-sdk/pull/6511)). Fixes vector-im/element-web#18197.
 * Iterate on search results for message bubbles ([\#7047](https://github.com/matrix-org/matrix-react-sdk/pull/7047)). Fixes vector-im/element-web#20315.
 * registration: redesign email verification page ([\#8554](https://github.com/matrix-org/matrix-react-sdk/pull/8554)). Fixes vector-im/element-web#21984.
 * Show full thread message in hover title on thread summary ([\#8568](https://github.com/matrix-org/matrix-react-sdk/pull/8568)). Fixes vector-im/element-web#22037.
 * Tweak video rooms copy ([\#8582](https://github.com/matrix-org/matrix-react-sdk/pull/8582)). Fixes vector-im/element-web#22176.
 * Live location share - beacon tooltip in maximised view ([\#8572](https://github.com/matrix-org/matrix-react-sdk/pull/8572)).
 * Add dialog to navigate long room topics ([\#8517](https://github.com/matrix-org/matrix-react-sdk/pull/8517)). Fixes vector-im/element-web#9623.
 * Change spaceroomfacepile tooltip if memberlist is shown ([\#8571](https://github.com/matrix-org/matrix-react-sdk/pull/8571)). Fixes vector-im/element-web#17406.
 * Improve message editing UI ([\#8483](https://github.com/matrix-org/matrix-react-sdk/pull/8483)). Fixes vector-im/element-web#9752 and vector-im/element-web#22108.
 * Make date changes more obvious ([\#6410](https://github.com/matrix-org/matrix-react-sdk/pull/6410)). Fixes vector-im/element-web#16221.
 * Enable forwarding static locations ([\#8553](https://github.com/matrix-org/matrix-react-sdk/pull/8553)).
 * Log `TimelinePanel` debugging info when opening the bug report modal ([\#8502](https://github.com/matrix-org/matrix-react-sdk/pull/8502)).
 * Improve welcome screen, add opt-out analytics ([\#8474](https://github.com/matrix-org/matrix-react-sdk/pull/8474)). Fixes vector-im/element-web#21946.
 * Converting selected text to MD link when pasting a URL ([\#8242](https://github.com/matrix-org/matrix-react-sdk/pull/8242)). Fixes vector-im/element-web#21634. Contributed by @Sinharitik589.
 * Support Inter on custom themes ([\#8399](https://github.com/matrix-org/matrix-react-sdk/pull/8399)). Fixes vector-im/element-web#16293.
 * Add a `Copy link` button to the right-click message context-menu labs feature ([\#8527](https://github.com/matrix-org/matrix-react-sdk/pull/8527)).
 * Move widget screenshots labs flag to devtools ([\#8522](https://github.com/matrix-org/matrix-react-sdk/pull/8522)).
 * Remove some labs features which don't get used or create maintenance burden: custom status, multiple integration managers, and do not disturb ([\#8521](https://github.com/matrix-org/matrix-react-sdk/pull/8521)).
 * Add a way to toggle `ScrollPanel` and `TimelinePanel` debug logs ([\#8513](https://github.com/matrix-org/matrix-react-sdk/pull/8513)).
 * Spaces: remove blue beta dot ([\#8511](https://github.com/matrix-org/matrix-react-sdk/pull/8511)). Fixes vector-im/element-web#22061.
 * Order new search dialog results by recency ([\#8444](https://github.com/matrix-org/matrix-react-sdk/pull/8444)).
 * Improve pills ([\#6398](https://github.com/matrix-org/matrix-react-sdk/pull/6398)). Fixes vector-im/element-web#16948 and vector-im/element-web#21281.
 * Add a way to maximize/pin widget from the PiP view ([\#7672](https://github.com/matrix-org/matrix-react-sdk/pull/7672)). Fixes vector-im/element-web#20723.
 * Iterate video room designs in labs ([\#8499](https://github.com/matrix-org/matrix-react-sdk/pull/8499)).
 * Improve UI/UX in calls ([\#7791](https://github.com/matrix-org/matrix-react-sdk/pull/7791)). Fixes vector-im/element-web#19937.
 * Add ability to change audio and video devices during a call ([\#7173](https://github.com/matrix-org/matrix-react-sdk/pull/7173)). Fixes vector-im/element-web#15595.

## 🐛 Bug Fixes
 * Fix video rooms sometimes connecting muted when they shouldn't ([\#22125](https://github.com/vector-im/element-web/pull/22125)).
 * Avoid flashing the 'join conference' button at the user in video rooms ([\#22120](https://github.com/vector-im/element-web/pull/22120)).
 * Fully close Jitsi conferences on errors ([\#22060](https://github.com/vector-im/element-web/pull/22060)).
 * Fix click behavior of notification badges on spaces ([\#8627](https://github.com/matrix-org/matrix-react-sdk/pull/8627)). Fixes vector-im/element-web#22241.
 * Add missing return values in Read Receipt animation code ([\#8625](https://github.com/matrix-org/matrix-react-sdk/pull/8625)). Fixes vector-im/element-web#22175.
 * Fix 'continue' button not working after accepting identity server terms of service ([\#8619](https://github.com/matrix-org/matrix-react-sdk/pull/8619)). Fixes vector-im/element-web#20003.
 * Proactively fix stuck devices in video rooms ([\#8587](https://github.com/matrix-org/matrix-react-sdk/pull/8587)). Fixes vector-im/element-web#22131.
 * Fix position of the message action bar on left side bubbles ([\#8398](https://github.com/matrix-org/matrix-react-sdk/pull/8398)). Fixes vector-im/element-web#21879. Contributed by @luixxiul.
 * Fix edge case thread summaries around events without a msgtype ([\#8576](https://github.com/matrix-org/matrix-react-sdk/pull/8576)).
 * Fix favourites metaspace not updating ([\#8594](https://github.com/matrix-org/matrix-react-sdk/pull/8594)). Fixes vector-im/element-web#22156.
 * Stop spaces from displaying as rooms in new breadcrumbs ([\#8595](https://github.com/matrix-org/matrix-react-sdk/pull/8595)). Fixes vector-im/element-web#22165.
 * Fix avatar position of hidden event on ThreadView ([\#8592](https://github.com/matrix-org/matrix-react-sdk/pull/8592)). Fixes vector-im/element-web#22199. Contributed by @luixxiul.
 * Fix MessageTimestamp position next to redacted messages on IRC/modern layout ([\#8591](https://github.com/matrix-org/matrix-react-sdk/pull/8591)). Fixes vector-im/element-web#22181. Contributed by @luixxiul.
 * Fix padding of messages in threads ([\#8574](https://github.com/matrix-org/matrix-react-sdk/pull/8574)). Contributed by @luixxiul.
 * Enable overflow of hidden events content ([\#8585](https://github.com/matrix-org/matrix-react-sdk/pull/8585)). Fixes vector-im/element-web#22187. Contributed by @luixxiul.
 * Increase composer line height to avoid cutting off emoji ([\#8583](https://github.com/matrix-org/matrix-react-sdk/pull/8583)). Fixes vector-im/element-web#22170.
 * Don't consider threads for breaking continuation until actually created ([\#8581](https://github.com/matrix-org/matrix-react-sdk/pull/8581)). Fixes vector-im/element-web#22164.
 * Fix displaying hidden events on threads  ([\#8555](https://github.com/matrix-org/matrix-react-sdk/pull/8555)). Fixes vector-im/element-web#22058. Contributed by @luixxiul.
 * Fix button width and align 絵文字 (emoji) on the user panel ([\#8562](https://github.com/matrix-org/matrix-react-sdk/pull/8562)). Fixes vector-im/element-web#22142. Contributed by @luixxiul.
 * Standardise the margin for settings tabs ([\#7963](https://github.com/matrix-org/matrix-react-sdk/pull/7963)). Fixes vector-im/element-web#20767. Contributed by @yuktea.
 * Fix room history not being visible even if we have historical keys ([\#8563](https://github.com/matrix-org/matrix-react-sdk/pull/8563)). Fixes vector-im/element-web#16983.
 * Fix oblong avatars in video room lobbies ([\#8565](https://github.com/matrix-org/matrix-react-sdk/pull/8565)).
 * Update thread summary when latest event gets decrypted ([\#8564](https://github.com/matrix-org/matrix-react-sdk/pull/8564)). Fixes vector-im/element-web#22151.
 * Fix codepath which can wrongly cause automatic space switch from all rooms ([\#8560](https://github.com/matrix-org/matrix-react-sdk/pull/8560)). Fixes vector-im/element-web#21373.
 * Fix effect of URL preview toggle not updating live ([\#8561](https://github.com/matrix-org/matrix-react-sdk/pull/8561)). Fixes vector-im/element-web#22148.
 * Fix visual bugs on AccessSecretStorageDialog ([\#8160](https://github.com/matrix-org/matrix-react-sdk/pull/8160)). Fixes vector-im/element-web#19426. Contributed by @luixxiul.
 * Fix the width bounce of the clock on the AudioPlayer ([\#8320](https://github.com/matrix-org/matrix-react-sdk/pull/8320)). Fixes vector-im/element-web#21788. Contributed by @luixxiul.
 * Hide the verification left stroke only on the thread list ([\#8525](https://github.com/matrix-org/matrix-react-sdk/pull/8525)). Fixes vector-im/element-web#22132. Contributed by @luixxiul.
 * Hide recently_viewed dropdown when other modal opens ([\#8538](https://github.com/matrix-org/matrix-react-sdk/pull/8538)). Contributed by @yaya-usman.
 * Only jump to date after pressing the 'go' button ([\#8548](https://github.com/matrix-org/matrix-react-sdk/pull/8548)). Fixes vector-im/element-web#20799.
 * Fix download button not working on events that were decrypted too late ([\#8556](https://github.com/matrix-org/matrix-react-sdk/pull/8556)). Fixes vector-im/element-web#19427.
 * Align thread summary button with bubble messages on the left side ([\#8388](https://github.com/matrix-org/matrix-react-sdk/pull/8388)). Fixes vector-im/element-web#21873. Contributed by @luixxiul.
 * Fix unresponsive notification toggles ([\#8549](https://github.com/matrix-org/matrix-react-sdk/pull/8549)). Fixes vector-im/element-web#22109.
 * Set color-scheme property in themes ([\#8547](https://github.com/matrix-org/matrix-react-sdk/pull/8547)). Fixes vector-im/element-web#22124.
 * Improve the styling of error messages during search initialization. ([\#6899](https://github.com/matrix-org/matrix-react-sdk/pull/6899)). Fixes vector-im/element-web#19245 and vector-im/element-web#18164. Contributed by @KalleStruik.
 * Don't leave button tooltips open when closing modals ([\#8546](https://github.com/matrix-org/matrix-react-sdk/pull/8546)). Fixes vector-im/element-web#22121.
 * update matrix-analytics-events ([\#8543](https://github.com/matrix-org/matrix-react-sdk/pull/8543)).
 * Handle Jitsi Meet crashes more gracefully ([\#8541](https://github.com/matrix-org/matrix-react-sdk/pull/8541)).
 * Fix regression around pasting links ([\#8537](https://github.com/matrix-org/matrix-react-sdk/pull/8537)). Fixes vector-im/element-web#22117.
 * Fixes suggested room not ellipsized on shrinking ([\#8536](https://github.com/matrix-org/matrix-react-sdk/pull/8536)). Contributed by @yaya-usman.
 * Add global spacing between display name and location body ([\#8523](https://github.com/matrix-org/matrix-react-sdk/pull/8523)). Fixes vector-im/element-web#22111. Contributed by @luixxiul.
 * Add box-shadow to the reply preview on the main (left) panel only ([\#8397](https://github.com/matrix-org/matrix-react-sdk/pull/8397)). Fixes vector-im/element-web#21894. Contributed by @luixxiul.
 * Set line-height: 1 to RedactedBody inside GenericEventListSummary for IRC/modern layout ([\#8529](https://github.com/matrix-org/matrix-react-sdk/pull/8529)). Fixes vector-im/element-web#22112. Contributed by @luixxiul.
 * Fix position of timestamp on the chat panel in IRC layout and message edits history modal window ([\#8464](https://github.com/matrix-org/matrix-react-sdk/pull/8464)). Fixes vector-im/element-web#22011 and vector-im/element-web#22014. Contributed by @luixxiul.
 * Fix unexpected and inconsistent inheritance of line-height property for mx_TextualEvent ([\#8485](https://github.com/matrix-org/matrix-react-sdk/pull/8485)). Fixes vector-im/element-web#22041. Contributed by @luixxiul.
 * Set the same margin to the right side of NewRoomIntro on TimelineCard ([\#8453](https://github.com/matrix-org/matrix-react-sdk/pull/8453)). Contributed by @luixxiul.
 * Remove duplicate tooltip from user pills ([\#8512](https://github.com/matrix-org/matrix-react-sdk/pull/8512)).
 * Set max-width for MLocationBody and MLocationBody_map by default ([\#8519](https://github.com/matrix-org/matrix-react-sdk/pull/8519)). Fixes vector-im/element-web#21983. Contributed by @luixxiul.
 * Simplify ReplyPreview UI implementation ([\#8516](https://github.com/matrix-org/matrix-react-sdk/pull/8516)). Fixes vector-im/element-web#22091. Contributed by @luixxiul.
 * Fix thread summary overflow on narrow message panel on bubble message layout ([\#8520](https://github.com/matrix-org/matrix-react-sdk/pull/8520)). Fixes vector-im/element-web#22097. Contributed by @luixxiul.
 * Live location sharing - refresh beacon timers on tab becoming active ([\#8515](https://github.com/matrix-org/matrix-react-sdk/pull/8515)).
 * Enlarge emoji again ([\#8509](https://github.com/matrix-org/matrix-react-sdk/pull/8509)). Fixes vector-im/element-web#22086.
 * Order receipts with the most recent on the right ([\#8506](https://github.com/matrix-org/matrix-react-sdk/pull/8506)). Fixes vector-im/element-web#22044.
 * Disconnect from video rooms when leaving ([\#8500](https://github.com/matrix-org/matrix-react-sdk/pull/8500)).
 * Fix soft crash around threads when room isn't yet in store ([\#8496](https://github.com/matrix-org/matrix-react-sdk/pull/8496)). Fixes vector-im/element-web#22047.
 * Fix reading of cached room device setting values ([\#8491](https://github.com/matrix-org/matrix-react-sdk/pull/8491)).
 * Add loading spinners to threads panels ([\#8490](https://github.com/matrix-org/matrix-react-sdk/pull/8490)). Fixes vector-im/element-web#21335.
 * Fix forwarding UI papercuts ([\#8482](https://github.com/matrix-org/matrix-react-sdk/pull/8482)). Fixes vector-im/element-web#17616.

Changes in [1.10.12](https://github.com/vector-im/element-desktop/releases/tag/v1.10.12) (2022-05-10)
=====================================================================================================

## ✨ Features
 * Made the location map change the cursor to a pointer so it looks like it's clickable (https ([\#8451](https://github.com/matrix-org/matrix-react-sdk/pull/8451)). Fixes vector-im/element-web#21991. Contributed by @Odyssey346.
 * Implement improved spacing for the thread list and timeline ([\#8337](https://github.com/matrix-org/matrix-react-sdk/pull/8337)). Fixes vector-im/element-web#21759. Contributed by @luixxiul.
 * LLS: expose way to enable live sharing labs flag from location dialog ([\#8416](https://github.com/matrix-org/matrix-react-sdk/pull/8416)).
 * Fix source text boxes in View Source modal should have full width ([\#8425](https://github.com/matrix-org/matrix-react-sdk/pull/8425)). Fixes vector-im/element-web#21938. Contributed by @EECvision.
 * Read Receipts: never show +1, if it’s just 4, show all of them ([\#8428](https://github.com/matrix-org/matrix-react-sdk/pull/8428)). Fixes vector-im/element-web#21935.
 * Add opt-in analytics to onboarding tasks ([\#8409](https://github.com/matrix-org/matrix-react-sdk/pull/8409)). Fixes vector-im/element-web#21705.
 * Allow user to control if they are signed out of all devices when changing password ([\#8259](https://github.com/matrix-org/matrix-react-sdk/pull/8259)). Fixes vector-im/element-web#2671.
 * Implement new Read Receipt design ([\#8389](https://github.com/matrix-org/matrix-react-sdk/pull/8389)). Fixes vector-im/element-web#20574.
 * Stick connected video rooms to the top of the room list ([\#8353](https://github.com/matrix-org/matrix-react-sdk/pull/8353)).
 * LLS: fix jumpy maximised map ([\#8387](https://github.com/matrix-org/matrix-react-sdk/pull/8387)).
 * Persist audio and video mute state in video rooms ([\#8376](https://github.com/matrix-org/matrix-react-sdk/pull/8376)).
 * Forcefully disconnect from video rooms on logout and tab close ([\#8375](https://github.com/matrix-org/matrix-react-sdk/pull/8375)).
 * Add local echo of connected devices in video rooms ([\#8368](https://github.com/matrix-org/matrix-react-sdk/pull/8368)).
 * Improve text of account deactivation dialog ([\#8371](https://github.com/matrix-org/matrix-react-sdk/pull/8371)). Fixes vector-im/element-web#17421.
 * Live location sharing: own live beacon status on maximised view ([\#8374](https://github.com/matrix-org/matrix-react-sdk/pull/8374)).
 * Show a lobby screen in video rooms ([\#8287](https://github.com/matrix-org/matrix-react-sdk/pull/8287)).
 * Settings toggle to disable Composer Markdown ([\#8358](https://github.com/matrix-org/matrix-react-sdk/pull/8358)). Fixes vector-im/element-web#20321.
 * Cache localStorage objects for SettingsStore ([\#8366](https://github.com/matrix-org/matrix-react-sdk/pull/8366)).
 * Bring `View Source` back from behind developer mode ([\#8369](https://github.com/matrix-org/matrix-react-sdk/pull/8369)). Fixes vector-im/element-web#21771.

## 🐛 Bug Fixes
 * Fix update from creating desktop shortcut ([\#333](https://github.com/vector-im/element-desktop/pull/333)). Fixes vector-im/element-web#9210. Contributed by @elibroftw.
 * Fix macOS and Linux build regressions ([\#345](https://github.com/vector-im/element-desktop/pull/345)).
 * Allow loading language files with two part language code ([\#339](https://github.com/vector-im/element-desktop/pull/339)). Contributed by @TPiUnikie.
 * Fix Jitsi Meet getting wedged at startup in some cases ([\#21995](https://github.com/vector-im/element-web/pull/21995)).
 * Fix camera getting muted when disconnecting from a video room ([\#21958](https://github.com/vector-im/element-web/pull/21958)).
 * Fix race conditions around threads ([\#8448](https://github.com/matrix-org/matrix-react-sdk/pull/8448)). Fixes vector-im/element-web#21627.
 * Fix reading of cached room device setting values ([\#8495](https://github.com/matrix-org/matrix-react-sdk/pull/8495)).
 * Fix issue with dispatch happening mid-dispatch due to js-sdk emit ([\#8473](https://github.com/matrix-org/matrix-react-sdk/pull/8473)). Fixes vector-im/element-web#22019.
 * Match MSC behaviour for threads when disabled (thread-aware mode) ([\#8476](https://github.com/matrix-org/matrix-react-sdk/pull/8476)). Fixes vector-im/element-web#22033.
 * Specify position of DisambiguatedProfile inside a thread on bubble message layout ([\#8452](https://github.com/matrix-org/matrix-react-sdk/pull/8452)). Fixes vector-im/element-web#21998. Contributed by @luixxiul.
 * Location sharing: do not trackuserlocation in location picker ([\#8466](https://github.com/matrix-org/matrix-react-sdk/pull/8466)). Fixes vector-im/element-web#22013.
 * fix text and map indent in thread view ([\#8462](https://github.com/matrix-org/matrix-react-sdk/pull/8462)). Fixes vector-im/element-web#21997.
 * Live location sharing: don't group beacon info with room creation summary ([\#8468](https://github.com/matrix-org/matrix-react-sdk/pull/8468)).
 * Don't linkify code blocks ([\#7859](https://github.com/matrix-org/matrix-react-sdk/pull/7859)). Fixes vector-im/element-web#9613.
 * read receipts: improve tooltips to show names of users ([\#8438](https://github.com/matrix-org/matrix-react-sdk/pull/8438)). Fixes vector-im/element-web#21940.
 * Fix poll overflowing a reply tile on bubble message layout ([\#8459](https://github.com/matrix-org/matrix-react-sdk/pull/8459)). Fixes vector-im/element-web#22005. Contributed by @luixxiul.
 * Fix text link buttons on UserInfo panel ([\#8247](https://github.com/matrix-org/matrix-react-sdk/pull/8247)). Fixes vector-im/element-web#21702. Contributed by @luixxiul.
 * Clear local storage settings handler cache on logout ([\#8454](https://github.com/matrix-org/matrix-react-sdk/pull/8454)). Fixes vector-im/element-web#21994.
 * Fix jump to bottom button being always displayed in non-overflowing timelines ([\#8460](https://github.com/matrix-org/matrix-react-sdk/pull/8460)). Fixes vector-im/element-web#22003.
 * fix timeline search with empty text box should do nothing ([\#8262](https://github.com/matrix-org/matrix-react-sdk/pull/8262)). Fixes vector-im/element-web#21714. Contributed by @EECvision.
 * Fixes "space panel kebab menu is rendered out of view on sub spaces"  ([\#8350](https://github.com/matrix-org/matrix-react-sdk/pull/8350)). Contributed by @yaya-usman.
 * Add margin to the location map inside ThreadView ([\#8442](https://github.com/matrix-org/matrix-react-sdk/pull/8442)). Fixes vector-im/element-web#21982. Contributed by @luixxiul.
 * Patch: "Reloading the registration page should warn about data loss" ([\#8377](https://github.com/matrix-org/matrix-react-sdk/pull/8377)). Contributed by @yaya-usman.
 * Live location sharing: fix safari timestamps pt 2 ([\#8443](https://github.com/matrix-org/matrix-react-sdk/pull/8443)).
 * Fix issue with thread notification state ignoring initial events ([\#8417](https://github.com/matrix-org/matrix-react-sdk/pull/8417)). Fixes vector-im/element-web#21927.
 * Fix event text overflow on bubble message layout ([\#8391](https://github.com/matrix-org/matrix-react-sdk/pull/8391)). Fixes vector-im/element-web#21882. Contributed by @luixxiul.
 * Disable the message action bar when hovering over the 1px border between threads on the list ([\#8429](https://github.com/matrix-org/matrix-react-sdk/pull/8429)). Fixes vector-im/element-web#21955. Contributed by @luixxiul.
 * correctly align read receipts to state events in bubble layout ([\#8419](https://github.com/matrix-org/matrix-react-sdk/pull/8419)). Fixes vector-im/element-web#21899.
 * Fix issue with underfilled timelines when barren of content ([\#8432](https://github.com/matrix-org/matrix-react-sdk/pull/8432)). Fixes vector-im/element-web#21930.
 * Fix baseline misalignment of thread panel summary by deduplication ([\#8413](https://github.com/matrix-org/matrix-react-sdk/pull/8413)).
 * Fix editing of non-html replies ([\#8418](https://github.com/matrix-org/matrix-react-sdk/pull/8418)). Fixes vector-im/element-web#21928.
 * Read Receipts "Fall from the Sky" ([\#8414](https://github.com/matrix-org/matrix-react-sdk/pull/8414)). Fixes vector-im/element-web#21888.
 * Make read receipts handle nullable roomMembers correctly ([\#8410](https://github.com/matrix-org/matrix-react-sdk/pull/8410)). Fixes vector-im/element-web#21896.
 * Don't form continuations on either side of a thread root ([\#8408](https://github.com/matrix-org/matrix-react-sdk/pull/8408)). Fixes vector-im/element-web#20908.
 * Fix centering issue with sticker placeholder ([\#8404](https://github.com/matrix-org/matrix-react-sdk/pull/8404)). Fixes vector-im/element-web#18014 and vector-im/element-web#6449.
 * Disable download option on <video/> , preferring dedicated download button ([\#8403](https://github.com/matrix-org/matrix-react-sdk/pull/8403)). Fixes vector-im/element-web#21902.
 * Fix infinite loop when pinning/unpinning persistent widgets ([\#8396](https://github.com/matrix-org/matrix-react-sdk/pull/8396)). Fixes vector-im/element-web#21864.
 * Tweak ReadReceiptGroup to better handle disambiguation ([\#8402](https://github.com/matrix-org/matrix-react-sdk/pull/8402)). Fixes vector-im/element-web#21897.
 * stop the bottom edge of buttons getting clipped in devtools ([\#8400](https://github.com/matrix-org/matrix-react-sdk/pull/8400)).
 * Fix issue with threads timelines with few events cropping events ([\#8392](https://github.com/matrix-org/matrix-react-sdk/pull/8392)). Fixes vector-im/element-web#20594.
 * Changed font-weight to 400 to support light weight font ([\#8345](https://github.com/matrix-org/matrix-react-sdk/pull/8345)). Fixes vector-im/element-web#21171. Contributed by @goelesha.
 * Fix issue with thread panel not updating when it loads on first render ([\#8382](https://github.com/matrix-org/matrix-react-sdk/pull/8382)). Fixes vector-im/element-web#21737.
 * fix: "Mention highlight and cursor hover highlight has different corner radius" ([\#8384](https://github.com/matrix-org/matrix-react-sdk/pull/8384)). Contributed by @yaya-usman.
 * Fix regression around haveRendererForEvent for hidden events ([\#8379](https://github.com/matrix-org/matrix-react-sdk/pull/8379)). Fixes vector-im/element-web#21862 and vector-im/element-web#21725.
 * Fix regression around the room list treeview keyboard a11y ([\#8385](https://github.com/matrix-org/matrix-react-sdk/pull/8385)). Fixes vector-im/element-web#21436.
 * Remove float property to let the margin between events appear on bubble message layout ([\#8373](https://github.com/matrix-org/matrix-react-sdk/pull/8373)). Fixes vector-im/element-web#21861. Contributed by @luixxiul.
 * Fix race in Registration between server change and flows fetch ([\#8359](https://github.com/matrix-org/matrix-react-sdk/pull/8359)). Fixes vector-im/element-web#21800.
 * fix rainbow breaks compound emojis ([\#8245](https://github.com/matrix-org/matrix-react-sdk/pull/8245)). Fixes vector-im/element-web#21371. Contributed by @EECvision.
 * Fix RightPanelStore handling first room on app launch wrong ([\#8370](https://github.com/matrix-org/matrix-react-sdk/pull/8370)). Fixes vector-im/element-web#21741.
 * Fix UnknownBody error message unalignment ([\#8346](https://github.com/matrix-org/matrix-react-sdk/pull/8346)). Fixes vector-im/element-web#21828. Contributed by @luixxiul.
 * Use -webkit-line-clamp for the room header topic overflow ([\#8367](https://github.com/matrix-org/matrix-react-sdk/pull/8367)). Fixes vector-im/element-web#21852. Contributed by @luixxiul.
 * Fix issue with ServerInfo crashing the modal ([\#8364](https://github.com/matrix-org/matrix-react-sdk/pull/8364)).
 * Fixes around threads beta in degraded mode ([\#8319](https://github.com/matrix-org/matrix-react-sdk/pull/8319)). Fixes vector-im/element-web#21762.

Changes in [1.10.11](https://github.com/vector-im/element-desktop/releases/tag/v1.10.11) (2022-04-26)
=====================================================================================================

## ✨ Features
 * Handle forced disconnects from Jitsi ([\#21697](https://github.com/vector-im/element-web/pull/21697)). Fixes vector-im/element-web#21517.
 * Improve performance of switching to rooms with lots of servers and ACLs ([\#8347](https://github.com/matrix-org/matrix-react-sdk/pull/8347)).
 * Avoid a reflow when setting caret position on an empty composer ([\#8348](https://github.com/matrix-org/matrix-react-sdk/pull/8348)).
 * Add message right-click context menu as a labs feature ([\#5672](https://github.com/matrix-org/matrix-react-sdk/pull/5672)).
 * Live location sharing - basic maximised beacon map ([\#8310](https://github.com/matrix-org/matrix-react-sdk/pull/8310)).
 * Live location sharing - render users own beacons in timeline ([\#8296](https://github.com/matrix-org/matrix-react-sdk/pull/8296)).
 * Improve Threads beta around degraded mode ([\#8318](https://github.com/matrix-org/matrix-react-sdk/pull/8318)).
 * Live location sharing -  beacon in timeline happy path ([\#8285](https://github.com/matrix-org/matrix-react-sdk/pull/8285)).
 * Add copy button to View Source screen ([\#8278](https://github.com/matrix-org/matrix-react-sdk/pull/8278)). Fixes vector-im/element-web#21482. Contributed by @olivialivia.
 * Add heart effect ([\#6188](https://github.com/matrix-org/matrix-react-sdk/pull/6188)). Contributed by @CicadaCinema.
 * Update new room icon ([\#8239](https://github.com/matrix-org/matrix-react-sdk/pull/8239)).

## 🐛 Bug Fixes
 * Prevent packing of native modules ([\#337](https://github.com/vector-im/element-desktop/pull/337)). Fixes vector-im/element-web#17188. Contributed by @PF4Public.
 * Fix: "Code formatting button does not escape backticks" ([\#8181](https://github.com/matrix-org/matrix-react-sdk/pull/8181)). Contributed by @yaya-usman.
 * Fix beta indicator dot causing excessive CPU usage ([\#8340](https://github.com/matrix-org/matrix-react-sdk/pull/8340)). Fixes vector-im/element-web#21793.
 * Fix overlapping timestamps on empty messages ([\#8205](https://github.com/matrix-org/matrix-react-sdk/pull/8205)). Fixes vector-im/element-web#21381. Contributed by @goelesha.
 * Fix power selector not showing up in user info when state_default undefined ([\#8297](https://github.com/matrix-org/matrix-react-sdk/pull/8297)). Fixes vector-im/element-web#21669.
 * Avoid looking up settings during timeline rendering ([\#8313](https://github.com/matrix-org/matrix-react-sdk/pull/8313)). Fixes vector-im/element-web#21740.
 * Fix a soft crash with video rooms ([\#8333](https://github.com/matrix-org/matrix-react-sdk/pull/8333)).
 * Fixes call tiles overflow ([\#8096](https://github.com/matrix-org/matrix-react-sdk/pull/8096)). Fixes vector-im/element-web#20254. Contributed by @luixxiul.
 * Fix a bug with emoji autocomplete sorting where adding the final "&#58;" would cause the emoji with the typed shortcode to no longer be at the top of the autocomplete list. ([\#8086](https://github.com/matrix-org/matrix-react-sdk/pull/8086)). Fixes vector-im/element-web#19302. Contributed by @commonlawfeature.
 * Fix image preview sizing for edge cases ([\#8322](https://github.com/matrix-org/matrix-react-sdk/pull/8322)). Fixes vector-im/element-web#20088.
 * Refactor SecurityRoomSettingsTab and remove unused state ([\#8306](https://github.com/matrix-org/matrix-react-sdk/pull/8306)). Fixes matrix-org/element-web-rageshakes#12002.
 * Don't show the prompt to enable desktop notifications immediately after registration ([\#8274](https://github.com/matrix-org/matrix-react-sdk/pull/8274)).
 * Stop tracking threads if threads support is disabled ([\#8308](https://github.com/matrix-org/matrix-react-sdk/pull/8308)). Fixes vector-im/element-web#21766.
 * Fix some issues with threads rendering ([\#8305](https://github.com/matrix-org/matrix-react-sdk/pull/8305)). Fixes vector-im/element-web#21670.
 * Fix threads rendering issue in Safari ([\#8298](https://github.com/matrix-org/matrix-react-sdk/pull/8298)). Fixes vector-im/element-web#21757.
 * Fix space panel width change on hovering over space item ([\#8299](https://github.com/matrix-org/matrix-react-sdk/pull/8299)). Fixes vector-im/element-web#19891.
 * Hide the reply in thread button in deployments where beta is forcibly disabled ([\#8294](https://github.com/matrix-org/matrix-react-sdk/pull/8294)). Fixes vector-im/element-web#21753.
 * Prevent soft crash around room list header context menu when space changes ([\#8289](https://github.com/matrix-org/matrix-react-sdk/pull/8289)). Fixes matrix-org/element-web-rageshakes#11416, matrix-org/element-web-rageshakes#11692, matrix-org/element-web-rageshakes#11739, matrix-org/element-web-rageshakes#11772, matrix-org/element-web-rageshakes#11891 matrix-org/element-web-rageshakes#11858 and matrix-org/element-web-rageshakes#11456.
 * When selecting reply in thread on a thread response open existing thread ([\#8291](https://github.com/matrix-org/matrix-react-sdk/pull/8291)). Fixes vector-im/element-web#21743.
 * Handle thread bundled relationships coming from the server via MSC3666 ([\#8292](https://github.com/matrix-org/matrix-react-sdk/pull/8292)). Fixes vector-im/element-web#21450.
 * Fix: Avatar preview does not update when same file is selected repeatedly ([\#8288](https://github.com/matrix-org/matrix-react-sdk/pull/8288)). Fixes vector-im/element-web#20098.
 * Fix a bug where user gets a warning when changing powerlevel from **Admin** to **custom level (100)** ([\#8248](https://github.com/matrix-org/matrix-react-sdk/pull/8248)). Fixes vector-im/element-web#21682. Contributed by @Jumeb.
 * Use a consistent alignment for all text items in a list ([\#8276](https://github.com/matrix-org/matrix-react-sdk/pull/8276)). Fixes vector-im/element-web#21731. Contributed by @luixxiul.
 * Fixes button labels being collapsed per a character in CJK languages ([\#8212](https://github.com/matrix-org/matrix-react-sdk/pull/8212)). Fixes vector-im/element-web#21287. Contributed by @luixxiul.
 * Fix: Remove jittery timeline scrolling after jumping to an event ([\#8263](https://github.com/matrix-org/matrix-react-sdk/pull/8263)).
 * Fix regression of edits showing up in the timeline with hidden events shown ([\#8260](https://github.com/matrix-org/matrix-react-sdk/pull/8260)). Fixes vector-im/element-web#21694.
 * Fix reporting events not working ([\#8257](https://github.com/matrix-org/matrix-react-sdk/pull/8257)). Fixes vector-im/element-web#21713.
 * Make Jitsi widgets in video rooms immutable ([\#8244](https://github.com/matrix-org/matrix-react-sdk/pull/8244)). Fixes vector-im/element-web#21647.
 * Fix: Ensure links to events scroll the correct events into view ([\#8250](https://github.com/matrix-org/matrix-react-sdk/pull/8250)). Fixes vector-im/element-web#19934.

Changes in [1.10.10](https://github.com/vector-im/element-desktop/releases/tag/v1.10.10) (2022-04-14)
=====================================================================================================

## 🐛 Bug Fixes
 * Fixes around threads beta in degraded mode ([\#8319](https://github.com/matrix-org/matrix-react-sdk/pull/8319)). Fixes vector-im/element-web#21762.

Changes in [1.10.9](https://github.com/vector-im/element-desktop/releases/tag/v1.10.9) (2022-04-12)
===================================================================================================

## ✨ Features
 * Release threads as a beta feature ([\#8081](https://github.com/matrix-org/matrix-react-sdk/pull/8081)). Fixes vector-im/element-web#21351.
 * More video rooms design updates ([\#8222](https://github.com/matrix-org/matrix-react-sdk/pull/8222)).
 * Update video rooms to new design specs ([\#8207](https://github.com/matrix-org/matrix-react-sdk/pull/8207)). Fixes vector-im/element-web#21515, vector-im/element-web#21516 vector-im/element-web#21519 and vector-im/element-web#21526.
 * Live Location Sharing - left panel warning with error ([\#8201](https://github.com/matrix-org/matrix-react-sdk/pull/8201)).
 * Live location sharing - Stop publishing location to beacons with consecutive errors ([\#8194](https://github.com/matrix-org/matrix-react-sdk/pull/8194)).
 * Live location sharing: allow retry when stop sharing fails ([\#8193](https://github.com/matrix-org/matrix-react-sdk/pull/8193)).
 * Allow voice messages to be scrubbed in the timeline ([\#8079](https://github.com/matrix-org/matrix-react-sdk/pull/8079)). Fixes vector-im/element-web#18713.
 * Live location sharing - stop sharing to beacons in rooms you left ([\#8187](https://github.com/matrix-org/matrix-react-sdk/pull/8187)).
 * Allow sending and thumbnailing AVIF images ([\#8172](https://github.com/matrix-org/matrix-react-sdk/pull/8172)).
 * Live location sharing - handle geolocation errors ([\#8179](https://github.com/matrix-org/matrix-react-sdk/pull/8179)).
 * Show voice room participants when not connected ([\#8136](https://github.com/matrix-org/matrix-react-sdk/pull/8136)). Fixes vector-im/element-web#21513.
 * Add margins between labs sections ([\#8169](https://github.com/matrix-org/matrix-react-sdk/pull/8169)).
 * Live location sharing - send geolocation beacon events - happy path ([\#8127](https://github.com/matrix-org/matrix-react-sdk/pull/8127)).
 * Add support for Animated (A)PNG ([\#8158](https://github.com/matrix-org/matrix-react-sdk/pull/8158)). Fixes vector-im/element-web#12967.
 * Don't form continuations from thread roots ([\#8166](https://github.com/matrix-org/matrix-react-sdk/pull/8166)). Fixes vector-im/element-web#20908.
 * Improve handling of animated GIF and WEBP images ([\#8153](https://github.com/matrix-org/matrix-react-sdk/pull/8153)). Fixes vector-im/element-web#16193 and vector-im/element-web#6684.
 * Wire up file preview for video files ([\#8140](https://github.com/matrix-org/matrix-react-sdk/pull/8140)). Fixes vector-im/element-web#21539.
 * When showing thread, always auto-focus its composer ([\#8115](https://github.com/matrix-org/matrix-react-sdk/pull/8115)). Fixes vector-im/element-web#21438.
 * Live location sharing - refresh beacon expiry in room ([\#8116](https://github.com/matrix-org/matrix-react-sdk/pull/8116)).
 * Use styled mxids in member list v2 ([\#8110](https://github.com/matrix-org/matrix-react-sdk/pull/8110)). Fixes vector-im/element-web#14825. Contributed by @SimonBrandner.
 * Delete groups (legacy communities system) ([\#8027](https://github.com/matrix-org/matrix-react-sdk/pull/8027)). Fixes vector-im/element-web#17532.
 * Add a prototype of voice rooms in labs ([\#8084](https://github.com/matrix-org/matrix-react-sdk/pull/8084)). Fixes vector-im/element-web#3546.

## 🐛 Bug Fixes
 * Avoid flashing the Jitsi prejoin screen at the user before skipping it ([\#21665](https://github.com/vector-im/element-web/pull/21665)).
 * Fix editing `<ol>` tags with a non-1 start attribute ([\#8211](https://github.com/matrix-org/matrix-react-sdk/pull/8211)). Fixes vector-im/element-web#21625.
 * Fix URL previews being enabled when room first created ([\#8227](https://github.com/matrix-org/matrix-react-sdk/pull/8227)). Fixes vector-im/element-web#21659.
 * Don't use m.call for Jitsi video rooms ([\#8223](https://github.com/matrix-org/matrix-react-sdk/pull/8223)).
 * Scale emoji with size of surrounding text ([\#8224](https://github.com/matrix-org/matrix-react-sdk/pull/8224)).
 * Make "Jump to date" translatable ([\#8218](https://github.com/matrix-org/matrix-react-sdk/pull/8218)).
 * Normalize call buttons ([\#8129](https://github.com/matrix-org/matrix-react-sdk/pull/8129)). Fixes vector-im/element-web#21493. Contributed by @luixxiul.
 * Show room preview bar with maximised widgets ([\#8180](https://github.com/matrix-org/matrix-react-sdk/pull/8180)). Fixes vector-im/element-web#21542.
 * Update more strings to not wrongly mention room when it is/could be a space ([\#7722](https://github.com/matrix-org/matrix-react-sdk/pull/7722)). Fixes vector-im/element-web#20243 and vector-im/element-web#20910.
 * Fix issue with redacting via edit composer flow causing stuck editStates ([\#8184](https://github.com/matrix-org/matrix-react-sdk/pull/8184)).
 * Fix some image/video scroll jumps ([\#8182](https://github.com/matrix-org/matrix-react-sdk/pull/8182)).
 * Fix "react error on share dialog" ([\#8170](https://github.com/matrix-org/matrix-react-sdk/pull/8170)). Contributed by @yaya-usman.
 * Fix disambiguated profile in threads in bubble layout ([\#8168](https://github.com/matrix-org/matrix-react-sdk/pull/8168)). Fixes vector-im/element-web#21570. Contributed by @SimonBrandner.
 * Responsive BetaCard on Labs ([\#8154](https://github.com/matrix-org/matrix-react-sdk/pull/8154)). Fixes vector-im/element-web#21554. Contributed by @luixxiul.
 * Display button as inline in room directory dialog ([\#8164](https://github.com/matrix-org/matrix-react-sdk/pull/8164)). Fixes vector-im/element-web#21567. Contributed by @luixxiul.
 * Null guard TimelinePanel unmount edge ([\#8171](https://github.com/matrix-org/matrix-react-sdk/pull/8171)).
 * Fix beta pill label breaking ([\#8162](https://github.com/matrix-org/matrix-react-sdk/pull/8162)). Fixes vector-im/element-web#21566. Contributed by @luixxiul.
 * Strip relations when forwarding ([\#7929](https://github.com/matrix-org/matrix-react-sdk/pull/7929)). Fixes vector-im/element-web#19769, vector-im/element-web#18067 vector-im/element-web#21015 and vector-im/element-web#10924.
 * Don't try (and fail) to show replies for redacted events ([\#8141](https://github.com/matrix-org/matrix-react-sdk/pull/8141)). Fixes vector-im/element-web#21435.
 * Fix 3pid member info for space member list ([\#8128](https://github.com/matrix-org/matrix-react-sdk/pull/8128)). Fixes vector-im/element-web#21534.
 * Set max-width to user context menu ([\#8089](https://github.com/matrix-org/matrix-react-sdk/pull/8089)). Fixes vector-im/element-web#21486. Contributed by @luixxiul.
 * Fix issue with falsey hrefs being sent in events ([\#8113](https://github.com/matrix-org/matrix-react-sdk/pull/8113)). Fixes vector-im/element-web#21417.
 * Make video sizing consistent with images ([\#8102](https://github.com/matrix-org/matrix-react-sdk/pull/8102)). Fixes vector-im/element-web#20072.

Changes in [1.10.7](https://github.com/vector-im/element-desktop/releases/tag/v1.10.7) (2022-03-15)
===================================================================================================

## 🔒 SECURITY FIXES

 * Fix a bug where URL previews could be enabled in the left-panel when they
   should not have been.

## ✨ Features
 * Add a config.json option to skip the built-in Jitsi welcome screen ([\#21190](https://github.com/vector-im/element-web/pull/21190)).
 * Add unexposed account setting for hiding poll creation ([\#7972](https://github.com/matrix-org/matrix-react-sdk/pull/7972)).
 * Allow pinning polls ([\#7922](https://github.com/matrix-org/matrix-react-sdk/pull/7922)). Fixes vector-im/element-web#20152.
 * Make trailing `:` into a setting ([\#6711](https://github.com/matrix-org/matrix-react-sdk/pull/6711)). Fixes vector-im/element-web#16682. Contributed by @SimonBrandner.
 * Location sharing > back button ([\#7958](https://github.com/matrix-org/matrix-react-sdk/pull/7958)).
 * use LocationAssetType ([\#7965](https://github.com/matrix-org/matrix-react-sdk/pull/7965)).
 * Location share type UI ([\#7924](https://github.com/matrix-org/matrix-react-sdk/pull/7924)).
 * Add a few more UIComponent flags, and ensure they are used in existing code ([\#7937](https://github.com/matrix-org/matrix-react-sdk/pull/7937)).
 * Add support for overriding strings in the app ([\#7886](https://github.com/matrix-org/matrix-react-sdk/pull/7886)).
 * Add support for redirecting to external pages after logout ([\#7905](https://github.com/matrix-org/matrix-react-sdk/pull/7905)).
 * Expose redaction power level in room settings ([\#7599](https://github.com/matrix-org/matrix-react-sdk/pull/7599)). Fixes vector-im/element-web#20590. Contributed by @SimonBrandner.
 * Update and expand ways to access pinned messages ([\#7906](https://github.com/matrix-org/matrix-react-sdk/pull/7906)). Fixes vector-im/element-web#21209 and vector-im/element-web#21211.
 * Add slash command to switch to a room's virtual room ([\#7839](https://github.com/matrix-org/matrix-react-sdk/pull/7839)).

## 🐛 Bug Fixes
 * Remove Lojban translation ([\#21302](https://github.com/vector-im/element-web/pull/21302)).
 * Merge pull request from GHSA-qmf4-7w7j-vf23 ([\#8059](https://github.com/matrix-org/matrix-react-sdk/pull/8059)).
 * Add another null guard for member ([\#7984](https://github.com/matrix-org/matrix-react-sdk/pull/7984)). Fixes vector-im/element-web#21319.
 * Fix room account settings ([\#7999](https://github.com/matrix-org/matrix-react-sdk/pull/7999)).
 * Fix missing summary text for pinned message changes ([\#7989](https://github.com/matrix-org/matrix-react-sdk/pull/7989)). Fixes vector-im/element-web#19823.
 * Pass room to getRoomTombstone to avoid racing with setState ([\#7986](https://github.com/matrix-org/matrix-react-sdk/pull/7986)).
 * Hide composer and call buttons when the room is tombstoned ([\#7975](https://github.com/matrix-org/matrix-react-sdk/pull/7975)). Fixes vector-im/element-web#21286.
 * Fix bad ternary statement in autocomplete user pill insertions ([\#7977](https://github.com/matrix-org/matrix-react-sdk/pull/7977)). Fixes vector-im/element-web#21307.
 * Fix sending locations into threads and fix i18n ([\#7943](https://github.com/matrix-org/matrix-react-sdk/pull/7943)). Fixes vector-im/element-web#21267.
 * Fix location map attribution rendering over message action bar ([\#7974](https://github.com/matrix-org/matrix-react-sdk/pull/7974)). Fixes vector-im/element-web#21297.
 * Fix wrongly asserting that PushRule::conditions is non-null ([\#7973](https://github.com/matrix-org/matrix-react-sdk/pull/7973)). Fixes vector-im/element-web#21305.
 * Fix account & room settings race condition ([\#7953](https://github.com/matrix-org/matrix-react-sdk/pull/7953)). Fixes vector-im/element-web#21163.
 * Fix bug with some space selections not being applied ([\#7971](https://github.com/matrix-org/matrix-react-sdk/pull/7971)). Fixes vector-im/element-web#21290.
 * Revert "replace all require(.svg) with esm import" ([\#7969](https://github.com/matrix-org/matrix-react-sdk/pull/7969)). Fixes vector-im/element-web#21293.
 * Hide unpinnable pinned messages in more cases ([\#7921](https://github.com/matrix-org/matrix-react-sdk/pull/7921)).
 * Fix room list being laggy while scrolling 🐌 ([\#7939](https://github.com/matrix-org/matrix-react-sdk/pull/7939)). Fixes vector-im/element-web#21262.
 * Make pinned messages more reliably reflect edits ([\#7920](https://github.com/matrix-org/matrix-react-sdk/pull/7920)). Fixes vector-im/element-web#17098.
 * Improve accessibility of the BetaPill ([\#7949](https://github.com/matrix-org/matrix-react-sdk/pull/7949)). Fixes vector-im/element-web#21255.
 * Autofocus correct composer after sending reaction ([\#7950](https://github.com/matrix-org/matrix-react-sdk/pull/7950)). Fixes vector-im/element-web#21273.
 * Consider polls as message events for rendering redactions ([\#7944](https://github.com/matrix-org/matrix-react-sdk/pull/7944)). Fixes vector-im/element-web#21125.
 * Prevent event tiles being shrunk/collapsed by flexbox ([\#7942](https://github.com/matrix-org/matrix-react-sdk/pull/7942)). Fixes vector-im/element-web#21269.
 * Fix ExportDialog title on export cancellation ([\#7936](https://github.com/matrix-org/matrix-react-sdk/pull/7936)). Fixes vector-im/element-web#21260. Contributed by @luixxiul.
 * Mandate use of js-sdk/src/matrix import over js-sdk/src ([\#7933](https://github.com/matrix-org/matrix-react-sdk/pull/7933)). Fixes vector-im/element-web#21253.
 * Fix backspace not working in the invite dialog ([\#7931](https://github.com/matrix-org/matrix-react-sdk/pull/7931)). Fixes vector-im/element-web#21249. Contributed by @SimonBrandner.
 * Fix right panel soft crashes due to missing room prop ([\#7923](https://github.com/matrix-org/matrix-react-sdk/pull/7923)). Fixes vector-im/element-web#21243.
 * fix color of location share caret ([\#7917](https://github.com/matrix-org/matrix-react-sdk/pull/7917)).
 * Wrap all EventTiles with a TileErrorBoundary and guard parsePermalink ([\#7916](https://github.com/matrix-org/matrix-react-sdk/pull/7916)). Fixes vector-im/element-web#21216.
 * Fix changing space sometimes bouncing to the wrong space ([\#7910](https://github.com/matrix-org/matrix-react-sdk/pull/7910)). Fixes vector-im/element-web#20425.
 * Ensure EventListSummary key does not change during backpagination ([\#7915](https://github.com/matrix-org/matrix-react-sdk/pull/7915)). Fixes vector-im/element-web#9192.
 * Fix positioning of the thread context menu ([\#7918](https://github.com/matrix-org/matrix-react-sdk/pull/7918)). Fixes vector-im/element-web#21236.
 * Inject sender into pinned messages ([\#7904](https://github.com/matrix-org/matrix-react-sdk/pull/7904)). Fixes vector-im/element-web#20314.
 * Tweak info message padding in right panel timeline ([\#7901](https://github.com/matrix-org/matrix-react-sdk/pull/7901)). Fixes vector-im/element-web#21212.
 * Fix another freeze on room switch ([\#7900](https://github.com/matrix-org/matrix-react-sdk/pull/7900)). Fixes vector-im/element-web#21127.
 * Clean up error listener when location picker closes ([\#7902](https://github.com/matrix-org/matrix-react-sdk/pull/7902)). Fixes vector-im/element-web#21213.
 * Fix edge case in context menu chevron positioning ([\#7899](https://github.com/matrix-org/matrix-react-sdk/pull/7899)).
 * Fix composer format buttons on WebKit ([\#7898](https://github.com/matrix-org/matrix-react-sdk/pull/7898)). Fixes vector-im/element-web#20868.
 * manage voicerecording state when deleting or sending a voice message ([\#7896](https://github.com/matrix-org/matrix-react-sdk/pull/7896)). Fixes vector-im/element-web#21151.
 * Fix bug with useRoomHierarchy tight-looping loadMore on error ([\#7893](https://github.com/matrix-org/matrix-react-sdk/pull/7893)).
 * Fix upload button & shortcut not working for narrow composer mode ([\#7894](https://github.com/matrix-org/matrix-react-sdk/pull/7894)). Fixes vector-im/element-web#21175 and vector-im/element-web#21142.
 * Fix emoji insertion in thread composer going to the main composer ([\#7895](https://github.com/matrix-org/matrix-react-sdk/pull/7895)). Fixes vector-im/element-web#21202.
 * Try harder to keep context menus inside the window ([\#7863](https://github.com/matrix-org/matrix-react-sdk/pull/7863)). Fixes vector-im/element-web#17527 and vector-im/element-web#18377.
 * Fix edge case around event list summary layout ([\#7891](https://github.com/matrix-org/matrix-react-sdk/pull/7891)). Fixes vector-im/element-web#21180.
 * Fix event list summary 1 hidden message pluralisation ([\#7890](https://github.com/matrix-org/matrix-react-sdk/pull/7890)). Fixes vector-im/element-web#21196.
 * Fix vanishing recently viewed menu ([\#7887](https://github.com/matrix-org/matrix-react-sdk/pull/7887)). Fixes vector-im/element-web#20827.
 * Fix freeze on room switch ([\#7884](https://github.com/matrix-org/matrix-react-sdk/pull/7884)). Fixes vector-im/element-web#21127.
 * Check 'useSystemTheme' in quick settings theme switcher ([\#7809](https://github.com/matrix-org/matrix-react-sdk/pull/7809)). Fixes vector-im/element-web#21061.
 * Fix 'my threads' filtering to include participated threads ([\#7882](https://github.com/matrix-org/matrix-react-sdk/pull/7882)). Fixes vector-im/element-web#20877.
 * Remove log line to try to fix freeze on answering VoIP call ([\#7883](https://github.com/matrix-org/matrix-react-sdk/pull/7883)).
 * Support social login & password on soft logout page ([\#7879](https://github.com/matrix-org/matrix-react-sdk/pull/7879)). Fixes vector-im/element-web#21099.
 * Fix missing padding on server picker ([\#7864](https://github.com/matrix-org/matrix-react-sdk/pull/7864)).
 * Throttle RoomState.members handlers ([\#7876](https://github.com/matrix-org/matrix-react-sdk/pull/7876)). Fixes vector-im/element-web#21127.
 * Only show joined/invited in search dialog ([\#7875](https://github.com/matrix-org/matrix-react-sdk/pull/7875)). Fixes vector-im/element-web#21161.
 * Don't pillify code blocks ([\#7861](https://github.com/matrix-org/matrix-react-sdk/pull/7861)). Fixes vector-im/element-web#20851 and vector-im/element-web#18687.
 * Fix keyboard shortcut icons on macOS ([\#7869](https://github.com/matrix-org/matrix-react-sdk/pull/7869)).

Changes in [1.10.6](https://github.com/vector-im/element-desktop/releases/tag/v1.10.6) (2022-03-01)
===================================================================================================

## 🐛 Bug Fixes
 * Fix some crashes in the right panel

Changes in [1.10.5](https://github.com/vector-im/element-desktop/releases/tag/v1.10.5) (2022-02-28)
===================================================================================================

## 🌐 Translations
 * This release contains a significant update to the Japanese translations, contributed by Suguru Hirahara (@luixxiul). ありがとうございます!

## ✨ Features
 * Support "closed" polls whose votes are not visible until they are ended ([\#7842](https://github.com/matrix-org/matrix-react-sdk/pull/7842)).
 * Focus trap in poll creation dialog ([\#7847](https://github.com/matrix-org/matrix-react-sdk/pull/7847)). Fixes vector-im/element-web#20281.
 * Add labs flag: Show only current profile on historical messages ([\#7815](https://github.com/matrix-org/matrix-react-sdk/pull/7815)).
 * Keep unsent voice messages in memory until they are deleted or sent ([\#7840](https://github.com/matrix-org/matrix-react-sdk/pull/7840)). Fixes vector-im/element-web#17979.
 * A link to `#/dm` in a custom home.html will open the "Direct Messages" dialog. ([\#7783](https://github.com/matrix-org/matrix-react-sdk/pull/7783)). Contributed by @johannes-krude.
 * set icon-button-color to be configurable via quaternary-content variable ([\#7725](https://github.com/matrix-org/matrix-react-sdk/pull/7725)). Fixes vector-im/element-web#20925. Contributed by @acxz.
 * Allow editing polls ([\#7806](https://github.com/matrix-org/matrix-react-sdk/pull/7806)).
 * Abstract spotlight to allow non-room results too ([\#7804](https://github.com/matrix-org/matrix-react-sdk/pull/7804)). Fixes vector-im/element-web#20968, matrix-org/element-web-rageshakes#10766, matrix-org/element-web-rageshakes#10777, matrix-org/element-web-rageshakes#10767 matrix-org/element-web-rageshakes#10760 and matrix-org/element-web-rageshakes#10752.
 * Display '(edited)' next to edited polls ([\#7789](https://github.com/matrix-org/matrix-react-sdk/pull/7789)).
 * Use the resize observer polyfill consistently ([\#7796](https://github.com/matrix-org/matrix-react-sdk/pull/7796)). Fixes matrix-org/element-web-rageshakes#10700.
 * Consolidate, simplify and improve copied tooltips ([\#7799](https://github.com/matrix-org/matrix-react-sdk/pull/7799)). Fixes vector-im/element-web#21069.
 * Suggest `@room` when `@channel`, `@everyone`, or `@here` is typed in composer ([\#7737](https://github.com/matrix-org/matrix-react-sdk/pull/7737)). Fixes vector-im/element-web#20972. Contributed by @aaronraimist.
 * Add customisation point to disable space creation ([\#7766](https://github.com/matrix-org/matrix-react-sdk/pull/7766)).
 * Consolidate RedactionGrouper and HiddenEventGrouper into MELS ([\#7739](https://github.com/matrix-org/matrix-react-sdk/pull/7739)). Fixes vector-im/element-web#20958.
 * Unify widget header actions with those in right panel ([\#7734](https://github.com/matrix-org/matrix-react-sdk/pull/7734)).
 * Improve new search dialog context text for exactly 2 parent spaces ([\#7761](https://github.com/matrix-org/matrix-react-sdk/pull/7761)).

## 🐛 Bug Fixes
 * Fix command key missing in keyboard shortcuts tab ([\#21102](https://github.com/vector-im/element-web/pull/21102)). Contributed by @SimonBrandner.
 * [Release] Tweak info message padding in right panel timeline ([\#7909](https://github.com/matrix-org/matrix-react-sdk/pull/7909)).
 * [Release] Fix edge case around event list summary layout ([\#7892](https://github.com/matrix-org/matrix-react-sdk/pull/7892)).
 * Wire up CallEventGroupers for Search Results ([\#7866](https://github.com/matrix-org/matrix-react-sdk/pull/7866)). Fixes vector-im/element-web#21150.
 * Fix edge case around event list summary layout ([\#7867](https://github.com/matrix-org/matrix-react-sdk/pull/7867)). Fixes vector-im/element-web#21153.
 * Fix misalignment with Event List Summaries ([\#7865](https://github.com/matrix-org/matrix-react-sdk/pull/7865)). Fixes vector-im/element-web#21149.
 * Fix non-customizable keybindings not working as expected ([\#7855](https://github.com/matrix-org/matrix-react-sdk/pull/7855)). Fixes vector-im/element-web#21136 and matrix-org/element-web-rageshakes#10830.
 * Fix accessibility around the room list treeview and new search beta ([\#7856](https://github.com/matrix-org/matrix-react-sdk/pull/7856)). Fixes matrix-org/element-web-rageshakes#10873.
 * Inhibit tooltip on timeline pill avatars, the whole pill has its own ([\#7854](https://github.com/matrix-org/matrix-react-sdk/pull/7854)). Fixes vector-im/element-web#21135.
 * Fix virtual / native room mapping on call transfers ([\#7848](https://github.com/matrix-org/matrix-react-sdk/pull/7848)).
 * Fix ScrollPanel data-scrollbar not responding to window resizing ([\#7841](https://github.com/matrix-org/matrix-react-sdk/pull/7841)). Fixes vector-im/element-web#20594.
 * add cursor: pointer to actionable poll options ([\#7826](https://github.com/matrix-org/matrix-react-sdk/pull/7826)). Fixes vector-im/element-web#21033.
 * Tear down AppTile using lifecycle tracking ([\#7833](https://github.com/matrix-org/matrix-react-sdk/pull/7833)). Fixes vector-im/element-web#21025.
 * Fix layout inconsistencies with the room search minimized button ([\#7824](https://github.com/matrix-org/matrix-react-sdk/pull/7824)). Fixes vector-im/element-web#21106.
 * Fix space panel notification badge behaviour and metrics ([\#7823](https://github.com/matrix-org/matrix-react-sdk/pull/7823)). Fixes vector-im/element-web#21092.
 * Fix left panel widgets causing app crashes (again) ([\#7814](https://github.com/matrix-org/matrix-react-sdk/pull/7814)).
 * Fix right panel data flow ([\#7811](https://github.com/matrix-org/matrix-react-sdk/pull/7811)). Fixes vector-im/element-web#20929.
 * set mask-size for icons ([\#7812](https://github.com/matrix-org/matrix-react-sdk/pull/7812)). Fixes vector-im/element-web#21047.
 * Fix room create tile not showing up with hidden events shown ([\#7810](https://github.com/matrix-org/matrix-react-sdk/pull/7810)). Fixes vector-im/element-web#20893.
 * Fix delayed badge update for mentions in encrypted rooms ([\#7813](https://github.com/matrix-org/matrix-react-sdk/pull/7813)). Fixes vector-im/element-web#20859.
 * Fix add existing space not showing any spaces ([\#7801](https://github.com/matrix-org/matrix-react-sdk/pull/7801)). Fixes vector-im/element-web#21087. Contributed by @c-cal.
 * Fix edge cases around event list summaries with hidden events and redactions ([\#7797](https://github.com/matrix-org/matrix-react-sdk/pull/7797)). Fixes vector-im/element-web#21030 vector-im/element-web#21050 and vector-im/element-web#21055.
 * Improve styling of edge case devtools state keys ([\#7794](https://github.com/matrix-org/matrix-react-sdk/pull/7794)). Fixes vector-im/element-web#21056.
 * Don't scroll to bottom when executing non-message slash commands ([\#7793](https://github.com/matrix-org/matrix-react-sdk/pull/7793)). Fixes vector-im/element-web#21065.
 * Fix cutout misalignment on some decorated room avatars ([\#7784](https://github.com/matrix-org/matrix-react-sdk/pull/7784)). Fixes vector-im/element-web#21038.
 * Fix desktop notifications for invites showing user IDs instead of displaynames ([\#7780](https://github.com/matrix-org/matrix-react-sdk/pull/7780)). Fixes vector-im/element-web#21022. Contributed by @c-cal.
 * Fix bad pluralisation on event list summary hidden message handling ([\#7778](https://github.com/matrix-org/matrix-react-sdk/pull/7778)).
 * Properly recurse subspaces for leave space dialog options ([\#7775](https://github.com/matrix-org/matrix-react-sdk/pull/7775)). Fixes vector-im/element-web#20949 and vector-im/element-web#21012.
 * Fix translation for keyboard shortcut displaynames ([\#7758](https://github.com/matrix-org/matrix-react-sdk/pull/7758)). Fixes vector-im/element-web#20992. Contributed by @c-cal.
 * Fix space member list opening with back button ([\#7773](https://github.com/matrix-org/matrix-react-sdk/pull/7773)). Fixes vector-im/element-web#21009. Contributed by @c-cal.
 * Fix sort order for facepiles which was exactly reverse ([\#7771](https://github.com/matrix-org/matrix-react-sdk/pull/7771)).
 * Fix state events being wrongly hidden when redacted ([\#7768](https://github.com/matrix-org/matrix-react-sdk/pull/7768)). Fixes vector-im/element-web#20959.
 * Event List Summary guard against missing event senders ([\#7767](https://github.com/matrix-org/matrix-react-sdk/pull/7767)). Fixes vector-im/element-web#21004.
 * Fix all settings button opening sidebar settings tab ([\#7765](https://github.com/matrix-org/matrix-react-sdk/pull/7765)). Fixes vector-im/element-web#20998. Contributed by @c-cal.
 * Fix theme selector dropdown overflow ([\#7764](https://github.com/matrix-org/matrix-react-sdk/pull/7764)). Fixes vector-im/element-web#20996. Contributed by @c-cal.
 * Fix widget and mjolnir state events showing with mxid not name ([\#7760](https://github.com/matrix-org/matrix-react-sdk/pull/7760)). Fixes vector-im/element-web#20986.
 * Fix space member list not opening ([\#7747](https://github.com/matrix-org/matrix-react-sdk/pull/7747)). Fixes vector-im/element-web#20982. Contributed by @c-cal.
 * Handle highlight notifications in timeline card button ([\#7762](https://github.com/matrix-org/matrix-react-sdk/pull/7762)). Fixes vector-im/element-web#20987. Contributed by @SimonBrandner.
 * Fix add existing space not showing any spaces ([\#7751](https://github.com/matrix-org/matrix-react-sdk/pull/7751)).
 * Inhibit Room List keyboard pass-thru when the search beta is enabled ([\#7752](https://github.com/matrix-org/matrix-react-sdk/pull/7752)). Fixes vector-im/element-web#20984.
 * Add unread notification dot to timeline card button ([\#7749](https://github.com/matrix-org/matrix-react-sdk/pull/7749)). Fixes vector-im/element-web#20946. Contributed by @SimonBrandner.

Changes in [1.10.4](https://github.com/vector-im/element-desktop/releases/tag/v1.10.4) (2022-02-17)
===================================================================================================

## 🐛 Bug Fixes
 * Fix bug where badge colour on encrypted rooms may not be correct until anothe rmessage is sent

Changes in [1.10.3](https://github.com/vector-im/element-desktop/releases/tag/v1.10.3) (2022-02-14)
===================================================================================================

 * Add map tile config to fix location sharing maps

Changes in [1.10.2](https://github.com/vector-im/element-desktop/releases/tag/v1.10.2) (2022-02-14)
===================================================================================================

## ✨ Features
 * Support a config option to change the default device name ([\#20790](https://github.com/vector-im/element-web/pull/20790)).
 * Capitalize "Privacy" in UserMenu ([\#7738](https://github.com/matrix-org/matrix-react-sdk/pull/7738)). Contributed by @aaronraimist.
 * Move new search experience to a Beta ([\#7718](https://github.com/matrix-org/matrix-react-sdk/pull/7718)). Fixes vector-im/element-meta#139 vector-im/element-web#20618 and vector-im/element-web#20339.
 * Auto select "Other homeserver" when user press "Edit" in homeserver field ([\#7337](https://github.com/matrix-org/matrix-react-sdk/pull/7337)). Fixes vector-im/element-web#20125. Contributed by @SimonBrandner.
 * Add unread badges and avatar decorations to spotlight search ([\#7696](https://github.com/matrix-org/matrix-react-sdk/pull/7696)). Fixes vector-im/element-web#20821.
 * Enable location sharing ([\#7703](https://github.com/matrix-org/matrix-react-sdk/pull/7703)).
 * Simplify Composer buttons ([\#7678](https://github.com/matrix-org/matrix-react-sdk/pull/7678)).
 * Add a warning to the console to discourage attacks and encourage contributing ([\#7673](https://github.com/matrix-org/matrix-react-sdk/pull/7673)). Fixes vector-im/element-web#2803. Contributed by @SimonBrandner.
 * Don't show replaced calls in the timeline ([\#7452](https://github.com/matrix-org/matrix-react-sdk/pull/7452)). Contributed by @SimonBrandner.
 * Tweak `/addwidget` widget names ([\#7681](https://github.com/matrix-org/matrix-react-sdk/pull/7681)).
 * Chat export parameter customisation ([\#7647](https://github.com/matrix-org/matrix-react-sdk/pull/7647)).
 * Put call on hold when transfer dialog is opened ([\#7669](https://github.com/matrix-org/matrix-react-sdk/pull/7669)).
 * Share e2ee keys when using /invite SlashCommand ([\#7655](https://github.com/matrix-org/matrix-react-sdk/pull/7655)). Fixes vector-im/element-web#20778 and vector-im/element-web#16982.
 * Tweak spotlight roving behaviour to reset when changing query ([\#7656](https://github.com/matrix-org/matrix-react-sdk/pull/7656)). Fixes vector-im/element-web#20537 vector-im/element-web#20612 and vector-im/element-web#20184.
 * Look up tile server info in homeserver's .well-known area ([\#7623](https://github.com/matrix-org/matrix-react-sdk/pull/7623)).
 * Add grouper for hidden events ([\#7649](https://github.com/matrix-org/matrix-react-sdk/pull/7649)).
 * The keyboard shortcut is control (or cmd) shift h. ([\#7584](https://github.com/matrix-org/matrix-react-sdk/pull/7584)). Contributed by @UwUnyaa.

## 🐛 Bug Fixes
 * [Release] Fix cutout misalignment on some decorated room avatars ([\#7785](https://github.com/matrix-org/matrix-react-sdk/pull/7785)).
 * [Release] Fix add existing space not showing any spaces ([\#7756](https://github.com/matrix-org/matrix-react-sdk/pull/7756)).
 * [Release] Inhibit Room List keyboard pass-thru when the search beta is enabled ([\#7754](https://github.com/matrix-org/matrix-react-sdk/pull/7754)).
 * [Release] Fix space member list not opening ([\#7755](https://github.com/matrix-org/matrix-react-sdk/pull/7755)).
 * Null-guard ELS from null summaryMembers ([\#7744](https://github.com/matrix-org/matrix-react-sdk/pull/7744)). Fixes vector-im/element-web#20807.
 * Improve responsiveness of the layout switcher ([\#7736](https://github.com/matrix-org/matrix-react-sdk/pull/7736)).
 * Tweak timeline card layout ([\#7743](https://github.com/matrix-org/matrix-react-sdk/pull/7743)). Fixes vector-im/element-web#20846.
 * Ensure location bodies have a width in bubbles ([\#7742](https://github.com/matrix-org/matrix-react-sdk/pull/7742)). Fixes vector-im/element-web#20916.
 * Tune aria-live regions around clocks/timers ([\#7735](https://github.com/matrix-org/matrix-react-sdk/pull/7735)). Fixes vector-im/element-web#20967.
 * Fix instances of decorated room avatar wrongly having their own tabIndex ([\#7730](https://github.com/matrix-org/matrix-react-sdk/pull/7730)).
 * Remove weird padding on stickers ([\#6271](https://github.com/matrix-org/matrix-react-sdk/pull/6271)). Fixes vector-im/element-web#17787. Contributed by @SimonBrandner.
 * Fix width issue of the composer overflow menu items ([\#7731](https://github.com/matrix-org/matrix-react-sdk/pull/7731)). Fixes vector-im/element-web#20898.
 * Properly handle persistent widgets when room is left ([\#7724](https://github.com/matrix-org/matrix-react-sdk/pull/7724)). Fixes vector-im/element-web#20901.
 * Null guard space hierarchy ([\#7729](https://github.com/matrix-org/matrix-react-sdk/pull/7729)). Fixes matrix-org/element-web-rageshakes#10433.
 * Fix add existing rooms button ([\#7728](https://github.com/matrix-org/matrix-react-sdk/pull/7728)). Fixes vector-im/element-web#20924. Contributed by @SimonBrandner.
 * Truncate long server names on login/register screen ([\#7702](https://github.com/matrix-org/matrix-react-sdk/pull/7702)). Fixes vector-im/element-web#18452.
 * Update PollCreateDialog-test to snapshot the html and not react tree ([\#7712](https://github.com/matrix-org/matrix-react-sdk/pull/7712)).
 * Fix creating polls outside of threads ([\#7711](https://github.com/matrix-org/matrix-react-sdk/pull/7711)). Fixes vector-im/element-web#20882.
 * Open native room when clicking notification from a virtual room ([\#7709](https://github.com/matrix-org/matrix-react-sdk/pull/7709)).
 * Fix relative link handling in Element Desktop ([\#7708](https://github.com/matrix-org/matrix-react-sdk/pull/7708)). Fixes vector-im/element-web#20783.
 * Reuse CopyableText component in all places it can be ([\#7701](https://github.com/matrix-org/matrix-react-sdk/pull/7701)). Fixes vector-im/element-web#20855.
 * Fit location into the width of the container ([\#7705](https://github.com/matrix-org/matrix-react-sdk/pull/7705)). Fixes vector-im/element-web#20861.
 * Make Spotlight Dialog roving reset more stable ([\#7698](https://github.com/matrix-org/matrix-react-sdk/pull/7698)). Fixes vector-im/element-web#20826.
 * Fix incorrect sizing of DecoratedRoomAvatar in RoomHeader ([\#7697](https://github.com/matrix-org/matrix-react-sdk/pull/7697)). Fixes vector-im/element-web#20090.
 * Use a more correct test for emoji ([\#7685](https://github.com/matrix-org/matrix-react-sdk/pull/7685)). Fixes vector-im/element-web#20824. Contributed by @robintown.
 * Fix vertical spacing in `compact` `<ContextMenu>` ([\#7684](https://github.com/matrix-org/matrix-react-sdk/pull/7684)). Fixes vector-im/element-web#20801.
 * Fix the sticker picker ([\#7692](https://github.com/matrix-org/matrix-react-sdk/pull/7692)). Fixes vector-im/element-web#20797.
 * Fix publishing address wrongly demanding the alias be available ([\#7690](https://github.com/matrix-org/matrix-react-sdk/pull/7690)). Fixes vector-im/element-web#12013 and vector-im/element-web#20833.
 * Prevent MemberAvatar soft-crashing when rendered with null member prop ([\#7691](https://github.com/matrix-org/matrix-react-sdk/pull/7691)). Fixes vector-im/element-web#20714.
 * Ensure UserInfo can be rendered without a room ([\#7687](https://github.com/matrix-org/matrix-react-sdk/pull/7687)). Fixes vector-im/element-web#20830.
 * Make polls fill column width in bubbles layout ([\#7661](https://github.com/matrix-org/matrix-react-sdk/pull/7661)). Fixes vector-im/element-web#20712.
 * Add a background to expanded nick name in IRC layout to make it readable. ([\#7652](https://github.com/matrix-org/matrix-react-sdk/pull/7652)). Fixes vector-im/element-web#20757. Contributed by @UwUnyaa.
 * Fix accessibility and consistency of MessageComposerButtons ([\#7679](https://github.com/matrix-org/matrix-react-sdk/pull/7679)). Fixes vector-im/element-web#20814.
 * Don't show shield next to deleted messages ([\#7671](https://github.com/matrix-org/matrix-react-sdk/pull/7671)). Fixes vector-im/element-web#20475. Contributed by @SimonBrandner.
 * Fix font size of spaces between big emoji ([\#7675](https://github.com/matrix-org/matrix-react-sdk/pull/7675)). Contributed by @robintown.
 * Fix shift-enter repeating last character ([\#7665](https://github.com/matrix-org/matrix-react-sdk/pull/7665)). Fixes vector-im/element-web#17215. Contributed by @SimonBrandner.
 * Remove Unpin option from maximised widget context menu ([\#7657](https://github.com/matrix-org/matrix-react-sdk/pull/7657)).
 * Fix new call event grouper implementation for encrypted rooms ([\#7654](https://github.com/matrix-org/matrix-react-sdk/pull/7654)).
 * Fix issue with tile error boundaries collapsing in bubbles layout ([\#7653](https://github.com/matrix-org/matrix-react-sdk/pull/7653)).
 * Fix emojis getting cropped in irc & bubble layouts by anti-zalgo ([\#7637](https://github.com/matrix-org/matrix-react-sdk/pull/7637)). Fixes vector-im/element-web#20744.
 * Fix space panel edge gradient not applying on load ([\#7644](https://github.com/matrix-org/matrix-react-sdk/pull/7644)). Fixes vector-im/element-web#20756.
 * Fix search results view for layouts other than Group/Modern ([\#7648](https://github.com/matrix-org/matrix-react-sdk/pull/7648)). Fixes vector-im/element-web#20745.

Changes in [1.10.1](https://github.com/vector-im/element-desktop/releases/tag/v1.10.1) (2022-02-01)
===================================================================================================

## 🐛 Bug Fixes
 * Fix the sticker picker ([\#7692](https://github.com/matrix-org/matrix-react-sdk/pull/7692)). Fixes vector-im/element-web#20797. 
 * Ensure UserInfo can be rendered without a room ([\#7687](https://github.com/matrix-org/matrix-react-sdk/pull/7687)). Fixes vector-im/element-web#20830.
 * Fix publishing address wrongly demanding the alias be available ([\#7690](https://github.com/matrix-org/matrix-react-sdk/pull/7690)). Fixes vector-im/element-web#12013 and vector-im/element-web#20833.

Changes in [1.10.0](https://github.com/vector-im/element-desktop/releases/tag/v1.10.0) (2022-01-31)
===================================================================================================

## ✨ Features
 * Enable posthog on app.element.io ([\#20539](https://github.com/vector-im/element-web/pull/20539)).
 * Tweak room list header menu for when space is active ([\#7577](https://github.com/matrix-org/matrix-react-sdk/pull/7577)). Fixes vector-im/element-web#20601.
 * Tweak light hover & active color for bubble layout ([\#7626](https://github.com/matrix-org/matrix-react-sdk/pull/7626)). Fixes vector-im/element-web#19475.
 * De-labs Metaspaces ([\#7613](https://github.com/matrix-org/matrix-react-sdk/pull/7613)).
 * De-labs Message Bubbles layout ([\#7612](https://github.com/matrix-org/matrix-react-sdk/pull/7612)).
 * Add customisation point for mxid display ([\#7595](https://github.com/matrix-org/matrix-react-sdk/pull/7595)).
 * Add labs flag for default open right panel ([\#7618](https://github.com/matrix-org/matrix-react-sdk/pull/7618)). Fixes vector-im/element-web#20666.
 * Tweak copy for the Sidebar tab in User Settings ([\#7578](https://github.com/matrix-org/matrix-react-sdk/pull/7578)). Fixes vector-im/element-web#20619.
 * Make widgets not reload (persistent) between center and top container  ([\#7575](https://github.com/matrix-org/matrix-react-sdk/pull/7575)). Fixes vector-im/element-web#20596. Contributed by @toger5.
 * Don't render a bubble around emotes in bubble layout ([\#7573](https://github.com/matrix-org/matrix-react-sdk/pull/7573)). Fixes vector-im/element-web#20617.
 * Add ability to switch between voice & video in calls ([\#7155](https://github.com/matrix-org/matrix-react-sdk/pull/7155)). Fixes vector-im/element-web#18619. Contributed by @SimonBrandner.
 * Re-renable Share option for location messages ([\#7596](https://github.com/matrix-org/matrix-react-sdk/pull/7596)).
 * Make room ID copyable ([\#7600](https://github.com/matrix-org/matrix-react-sdk/pull/7600)). Fixes vector-im/element-web#20675. Contributed by @SimonBrandner.
 * Improve the look of the keyboard settings tab ([\#7562](https://github.com/matrix-org/matrix-react-sdk/pull/7562)). Contributed by @SimonBrandner.
 * Add tooltips to emoji in messages ([\#7592](https://github.com/matrix-org/matrix-react-sdk/pull/7592)). Fixes vector-im/element-web#9911 and vector-im/element-web#20661. Contributed by @robintown.
 * Improve redundant tooltip on send button in forward dialog ([\#7594](https://github.com/matrix-org/matrix-react-sdk/pull/7594)). Contributed by @twigleingrid.
 * Allow downloads from widgets. ([\#7502](https://github.com/matrix-org/matrix-react-sdk/pull/7502)). Contributed by @Fox32.
 * Parse matrix-schemed URIs ([\#7453](https://github.com/matrix-org/matrix-react-sdk/pull/7453)).
 * Show a tile at beginning of visible history ([\#5887](https://github.com/matrix-org/matrix-react-sdk/pull/5887)). Fixes vector-im/element-web#16818 vector-im/element-web#16679 and vector-im/element-web#19888. Contributed by @robintown.
 * Enable the polls feature ([\#7581](https://github.com/matrix-org/matrix-react-sdk/pull/7581)).
 * Display general marker on non-self location shares ([\#7574](https://github.com/matrix-org/matrix-react-sdk/pull/7574)).
 * Improve/add notifications for location and poll events ([\#7552](https://github.com/matrix-org/matrix-react-sdk/pull/7552)). Fixes vector-im/element-web#20561. Contributed by @SimonBrandner.
 * Upgrade linkify to v3.0 ([\#7282](https://github.com/matrix-org/matrix-react-sdk/pull/7282)). Fixes vector-im/element-web#17133 vector-im/element-web#16825 and vector-im/element-web#5808. Contributed by @Palid.
 * Update sidebar icon from Compound ([\#7572](https://github.com/matrix-org/matrix-react-sdk/pull/7572)). Fixes vector-im/element-web#20615.
 * Replace home icon with new one ([\#7571](https://github.com/matrix-org/matrix-react-sdk/pull/7571)). Fixes vector-im/element-web#20606.
 * Make the `Keyboard Shortcuts` dialog into a settings tab ([\#7198](https://github.com/matrix-org/matrix-react-sdk/pull/7198)). Fixes vector-im/element-web#19866. Contributed by @SimonBrandner.
 * Add setting for enabling location sharing ([\#7547](https://github.com/matrix-org/matrix-react-sdk/pull/7547)).
 * Add a developer mode 'view source' button to crashed event tiles ([\#7537](https://github.com/matrix-org/matrix-react-sdk/pull/7537)).
 * Replace `kick` terminology with `Remove from chat` ([\#7469](https://github.com/matrix-org/matrix-react-sdk/pull/7469)). Fixes vector-im/element-web#9547.
 * Render events as extensible events (behind labs) ([\#7462](https://github.com/matrix-org/matrix-react-sdk/pull/7462)).
 * Render Jitsi (and other sticky widgets) in PiP container, so it can be dragged and the "jump to room functionality" is provided ([\#7450](https://github.com/matrix-org/matrix-react-sdk/pull/7450)). Fixes vector-im/element-web#15682. Contributed by @toger5.
 * Allow bubble layout in Thread View ([\#7478](https://github.com/matrix-org/matrix-react-sdk/pull/7478)). Fixes vector-im/element-web#20419.
 * Make LocationPicker appearance cleaner ([\#7516](https://github.com/matrix-org/matrix-react-sdk/pull/7516)).
 * Limit max-width for bubble layout to 1200px ([\#7458](https://github.com/matrix-org/matrix-react-sdk/pull/7458)). Fixes vector-im/element-web#18072.
 * Improve look of call events in bubble layout ([\#7445](https://github.com/matrix-org/matrix-react-sdk/pull/7445)). Fixes vector-im/element-web#20324. Contributed by @SimonBrandner.
 * Make files & voice memos in bubble layout match colouring ([\#7457](https://github.com/matrix-org/matrix-react-sdk/pull/7457)). Fixes vector-im/element-web#20326.
 * Allow cancelling events whilst they are encrypting ([\#7483](https://github.com/matrix-org/matrix-react-sdk/pull/7483)). Fixes vector-im/element-web#17726.

## 🐛 Bug Fixes
 * [Release] Fix left panel widgets causing app-wide crash ([\#7660](https://github.com/matrix-org/matrix-react-sdk/pull/7660)).
 * Load light theme prior to HTML export to ensure it is present ([\#7643](https://github.com/matrix-org/matrix-react-sdk/pull/7643)). Fixes vector-im/element-web#20276.
 * Fix soft-crash when hanging up Jitsi via PIP ([\#7645](https://github.com/matrix-org/matrix-react-sdk/pull/7645)). Fixes vector-im/element-web#20766.
 * Fix RightPanelStore assuming isViewingRoom is false on load ([\#7642](https://github.com/matrix-org/matrix-react-sdk/pull/7642)).
 * Correctly handle Room.timeline events which have a nullable `Room` ([\#7635](https://github.com/matrix-org/matrix-react-sdk/pull/7635)). Fixes matrix-org/element-web-rageshakes#9490.
 * Translate keyboard shortcut alternate key names ([\#7633](https://github.com/matrix-org/matrix-react-sdk/pull/7633)). Fixes vector-im/element-web#20739.
 * Fix unfocused paste handling and focus return for file uploads ([\#7625](https://github.com/matrix-org/matrix-react-sdk/pull/7625)).
 * Changed MacOS hotkey for GoToHome view. ([\#7631](https://github.com/matrix-org/matrix-react-sdk/pull/7631)). Contributed by @aj-ya.
 * Fix issue with the new composer EmojiPart which caused infinite loops ([\#7629](https://github.com/matrix-org/matrix-react-sdk/pull/7629)). Fixes vector-im/element-web#20746.
 * Upgrade linkifyjs to fix schemes as domain prefixes ([\#7628](https://github.com/matrix-org/matrix-react-sdk/pull/7628)). Fixes vector-im/element-web#20720.
 * Show bubble tile timestamps for bubble layout inside the bubble ([\#7622](https://github.com/matrix-org/matrix-react-sdk/pull/7622)). Fixes vector-im/element-web#20562.
 *  Improve taken username warning in registration for when request fails ([\#7621](https://github.com/matrix-org/matrix-react-sdk/pull/7621)).
 * Avoid double dialog after clicking to remove a public room ([\#7604](https://github.com/matrix-org/matrix-react-sdk/pull/7604)). Fixes vector-im/element-web#20681. Contributed by @c-cal.
 * Fix space member list right panel state ([\#7617](https://github.com/matrix-org/matrix-react-sdk/pull/7617)). Fixes vector-im/element-web#20716.
 * Fall back to legacy analytics for guest users ([\#7616](https://github.com/matrix-org/matrix-react-sdk/pull/7616)).
 * Always emit a space filter update when the space is actually changed ([\#7611](https://github.com/matrix-org/matrix-react-sdk/pull/7611)). Fixes vector-im/element-web#20664.
 * Enlarge emoji in composer ([\#7602](https://github.com/matrix-org/matrix-react-sdk/pull/7602)). Fixes vector-im/element-web#20665 vector-im/element-web#15635 and vector-im/element-web#20688. Contributed by @robintown.
 * Disable location sharing button on Desktop ([\#7590](https://github.com/matrix-org/matrix-react-sdk/pull/7590)).
 * Make pills more natural to navigate around ([\#7607](https://github.com/matrix-org/matrix-react-sdk/pull/7607)). Fixes vector-im/element-web#20678. Contributed by @robintown.
 * Fix excessive padding on inline images ([\#7605](https://github.com/matrix-org/matrix-react-sdk/pull/7605)). Contributed by @robintown.
 * Prevent pills from being split by formatting actions ([\#7606](https://github.com/matrix-org/matrix-react-sdk/pull/7606)). Contributed by @robintown.
 * Fix translation of "powerText" ([\#7603](https://github.com/matrix-org/matrix-react-sdk/pull/7603)). Contributed by @c-cal.
 * Unhide display names when switching back to modern layout ([\#7601](https://github.com/matrix-org/matrix-react-sdk/pull/7601)). Fixes vector-im/element-web#20676. Contributed by @robintown.
 * Fix space member list not opening ([\#7609](https://github.com/matrix-org/matrix-react-sdk/pull/7609)). Fixes vector-im/element-web#20679. Contributed by @SimonBrandner.
 * Fix translation for the "Add room" tooltip ([\#7532](https://github.com/matrix-org/matrix-react-sdk/pull/7532)). Contributed by @c-cal.
 * Make the close button of the location share dialog visible in high-contrast theme ([\#7597](https://github.com/matrix-org/matrix-react-sdk/pull/7597)).
 * Cancel pending events in virtual room when call placed ([\#7583](https://github.com/matrix-org/matrix-react-sdk/pull/7583)). Fixes vector-im/element-web#17594.
 * Fix alignment of unread badge in thread list ([\#7582](https://github.com/matrix-org/matrix-react-sdk/pull/7582)). Fixes vector-im/element-web#20643.
 * Fix left positioned tooltips being wrong and offset by fixed value ([\#7551](https://github.com/matrix-org/matrix-react-sdk/pull/7551)).
 * Fix MAB overlapping or overflowing in bubbles layout and threads regressions ([\#7569](https://github.com/matrix-org/matrix-react-sdk/pull/7569)). Fixes vector-im/element-web#20403 and vector-im/element-web#20404.
 * Fix wrong icon being used for appearance tab in space preferences dialog ([\#7570](https://github.com/matrix-org/matrix-react-sdk/pull/7570)). Fixes vector-im/element-web#20608.
 * Fix `/jumptodate` using wrong MSC feature flag ([\#7563](https://github.com/matrix-org/matrix-react-sdk/pull/7563)).
 * Ensure maps show up in replies and threads, by creating unique IDs ([\#7568](https://github.com/matrix-org/matrix-react-sdk/pull/7568)).
 * Differentiate between hover and roving focus in spotlight dialog ([\#7564](https://github.com/matrix-org/matrix-react-sdk/pull/7564)). Fixes vector-im/element-web#20597.
 * Fix timeline jumping issues related to bubble layout ([\#7529](https://github.com/matrix-org/matrix-react-sdk/pull/7529)). Fixes vector-im/element-web#20302.
 * Start a conference in a room with 2 people + invitee rather than a 1:1 call ([\#7557](https://github.com/matrix-org/matrix-react-sdk/pull/7557)). Fixes vector-im/element-web#1202. Contributed by @SimonBrandner.
 * Wait for initial profile load before displaying widget ([\#7556](https://github.com/matrix-org/matrix-react-sdk/pull/7556)).
 * Make widgets and calls span across the whole room width when using bubble layout ([\#7553](https://github.com/matrix-org/matrix-react-sdk/pull/7553)). Fixes vector-im/element-web#20560. Contributed by @SimonBrandner.
 * Always show right panel after setting a card ([\#7544](https://github.com/matrix-org/matrix-react-sdk/pull/7544)). Contributed by @toger5.
 * Support deserialising HR tags for editing ([\#7543](https://github.com/matrix-org/matrix-react-sdk/pull/7543)). Fixes vector-im/element-web#20553.
 * Refresh ThreadView after React state has been updated ([\#7539](https://github.com/matrix-org/matrix-react-sdk/pull/7539)). Fixes vector-im/element-web#20549.
 * Set initial zoom level to 1 to make zooming to location faster ([\#7541](https://github.com/matrix-org/matrix-react-sdk/pull/7541)).
 * truncate room name on pip header ([\#7538](https://github.com/matrix-org/matrix-react-sdk/pull/7538)).
 * Prevent enter to send edit weirdness when no change has been made ([\#7522](https://github.com/matrix-org/matrix-react-sdk/pull/7522)). Fixes vector-im/element-web#20507.
 * Allow using room pills in slash commands ([\#7513](https://github.com/matrix-org/matrix-react-sdk/pull/7513)). Fixes vector-im/element-web#20343.

Changes in [1.9.9](https://github.com/vector-im/element-desktop/releases/tag/v1.9.9) (2022-01-17)
=================================================================================================

## ✨ Features
 * Add permission dropdown for sending reactions ([\#7492](https://github.com/matrix-org/matrix-react-sdk/pull/7492)). Fixes vector-im/element-web#20450.
 * Ship maximised widgets and remove feature flag ([\#7509](https://github.com/matrix-org/matrix-react-sdk/pull/7509)).
 * Properly maintain aspect ratio of inline images ([\#7503](https://github.com/matrix-org/matrix-react-sdk/pull/7503)).
 * Add zoom buttons to the location view ([\#7482](https://github.com/matrix-org/matrix-react-sdk/pull/7482)).
 * Remove bubble from around location events ([\#7459](https://github.com/matrix-org/matrix-react-sdk/pull/7459)). Fixes vector-im/element-web#20323.
 * Disable "Publish this room" option in invite only rooms ([\#7441](https://github.com/matrix-org/matrix-react-sdk/pull/7441)). Fixes vector-im/element-web#6596. Contributed by @aaronraimist.
 * Give secret key field an `id` ([\#7489](https://github.com/matrix-org/matrix-react-sdk/pull/7489)). Fixes vector-im/element-web#20390. Contributed by @SimonBrandner.
 * Display a tooltip when you hover over a location ([\#7472](https://github.com/matrix-org/matrix-react-sdk/pull/7472)).
 * Open map in a dialog when it is clicked ([\#7465](https://github.com/matrix-org/matrix-react-sdk/pull/7465)).
 * a11y - wrap notification level radios in fieldsets ([\#7471](https://github.com/matrix-org/matrix-react-sdk/pull/7471)).
 * Wrap inputs in fieldsets in Space visibility settings ([\#7350](https://github.com/matrix-org/matrix-react-sdk/pull/7350)).
 * History based navigation with new right panel store ([\#7398](https://github.com/matrix-org/matrix-react-sdk/pull/7398)). Fixes vector-im/element-web#19686 vector-im/element-web#19660 and vector-im/element-web#19634.
 * Associate room alias warning with public option in settings ([\#7430](https://github.com/matrix-org/matrix-react-sdk/pull/7430)).
 * Disable quick reactions button when no permissions ([\#7412](https://github.com/matrix-org/matrix-react-sdk/pull/7412)). Fixes vector-im/element-web#20270.
 * Allow opening a map view in OpenStreetMap ([\#7428](https://github.com/matrix-org/matrix-react-sdk/pull/7428)).
 * Display the user's avatar when they shared their location ([\#7424](https://github.com/matrix-org/matrix-react-sdk/pull/7424)).
 * Remove the Forward and Share buttons for location messages only ([\#7423](https://github.com/matrix-org/matrix-react-sdk/pull/7423)).
 * Add configuration to disable relative date markers in timeline ([\#7405](https://github.com/matrix-org/matrix-react-sdk/pull/7405)).
 * Space preferences for whether or not you see DMs in a Space ([\#7250](https://github.com/matrix-org/matrix-react-sdk/pull/7250)). Fixes vector-im/element-web#19529 and vector-im/element-web#19955.
 * Have LocalEchoWrapper emit updates so the app can react faster ([\#7358](https://github.com/matrix-org/matrix-react-sdk/pull/7358)). Fixes vector-im/element-web#19749.
 * Use semantic heading on dialog component ([\#7383](https://github.com/matrix-org/matrix-react-sdk/pull/7383)).
 * Add `/jumptodate` slash command ([\#7372](https://github.com/matrix-org/matrix-react-sdk/pull/7372)). Fixes vector-im/element-web#7677.
 * Update room context menu copy ([\#7361](https://github.com/matrix-org/matrix-react-sdk/pull/7361)). Fixes vector-im/element-web#20133.
 * Use lazy rendering in the AddExistingToSpaceDialog ([\#7369](https://github.com/matrix-org/matrix-react-sdk/pull/7369)). Fixes vector-im/element-web#18784.
 * Tweak FacePile tooltip to include whether or not you are included ([\#7367](https://github.com/matrix-org/matrix-react-sdk/pull/7367)). Fixes vector-im/element-web#17278.

## 🐛 Bug Fixes
 * Ensure group audio-only calls don't switch on the webcam on join ([\#20234](https://github.com/vector-im/element-web/pull/20234)). Fixes vector-im/element-web#20212.
 * Fix wrongly wrapping code blocks, breaking line numbers ([\#7507](https://github.com/matrix-org/matrix-react-sdk/pull/7507)). Fixes vector-im/element-web#20316.
 * Set header buttons to no phase when right panel is closed ([\#7506](https://github.com/matrix-org/matrix-react-sdk/pull/7506)).
 * Fix active Jitsi calls (and other active widgets) not being visible on screen, by showing them in PiP if they are not visible in any other container ([\#7435](https://github.com/matrix-org/matrix-react-sdk/pull/7435)). Fixes vector-im/element-web#15169 and vector-im/element-web#20275.
 * Fix layout of message bubble preview in settings ([\#7497](https://github.com/matrix-org/matrix-react-sdk/pull/7497)).
 * Prevent mutations of js-sdk owned objects as it breaks accountData ([\#7504](https://github.com/matrix-org/matrix-react-sdk/pull/7504)). Fixes matrix-org/element-web-rageshakes#7822.
 * fallback properly with pluralized strings ([\#7495](https://github.com/matrix-org/matrix-react-sdk/pull/7495)). Fixes vector-im/element-web#20455.
 * Consider continuations when resolving whether a tile is last in section ([\#7461](https://github.com/matrix-org/matrix-react-sdk/pull/7461)). Fixes vector-im/element-web#20368 and vector-im/element-web#20369.
 * Fix read receipts and sent indicators for bubble layout ([\#7460](https://github.com/matrix-org/matrix-react-sdk/pull/7460)). Fixes vector-im/element-web#18298 and vector-im/element-web#20345.
 * null-guard dataset mxTheme to prevent html exports from exploding ([\#7493](https://github.com/matrix-org/matrix-react-sdk/pull/7493)). Fixes vector-im/element-web#20453.
 * Fix avatar container overlapping give feedback cta ([\#7491](https://github.com/matrix-org/matrix-react-sdk/pull/7491)). Fixes matrix-org/element-web-rageshakes#7987.
 * Fix jump to bottom button working when on a permalink ([\#7494](https://github.com/matrix-org/matrix-react-sdk/pull/7494)). Fixes vector-im/element-web#19813.
 * Remove the Description from the location picker ([\#7485](https://github.com/matrix-org/matrix-react-sdk/pull/7485)).
 * Fix look of the untrusted device dialog ([\#7487](https://github.com/matrix-org/matrix-react-sdk/pull/7487)). Fixes vector-im/element-web#20447. Contributed by @SimonBrandner.
 * Hide maximise button in the sticker picker  ([\#7488](https://github.com/matrix-org/matrix-react-sdk/pull/7488)). Fixes vector-im/element-web#20443. Contributed by @SimonBrandner.
 * Fix space ordering to match newer spec ([\#7481](https://github.com/matrix-org/matrix-react-sdk/pull/7481)).
 * Fix typing notification colors ([\#7490](https://github.com/matrix-org/matrix-react-sdk/pull/7490)). Fixes vector-im/element-web#20144. Contributed by @SimonBrandner.
 * fix fallback for pluralized strings ([\#7480](https://github.com/matrix-org/matrix-react-sdk/pull/7480)). Fixes vector-im/element-web#20426.
 * Fix right panel soft crashes chat rooms ([\#7479](https://github.com/matrix-org/matrix-react-sdk/pull/7479)). Fixes vector-im/element-web#20433.
 * update yarn.lock and i18n ([\#7476](https://github.com/matrix-org/matrix-react-sdk/pull/7476)). Fixes vector-im/element-web#20426 and vector-im/element-web#20423.
 * Don't send typing notification when restoring composer draft ([\#7477](https://github.com/matrix-org/matrix-react-sdk/pull/7477)). Fixes vector-im/element-web#20424.
 * Fix room joining spinner being incorrect if you change room mid-join ([\#7473](https://github.com/matrix-org/matrix-react-sdk/pull/7473)).
 * Only return the approved widget capabilities instead of accepting all requested capabilities ([\#7454](https://github.com/matrix-org/matrix-react-sdk/pull/7454)). Contributed by @dhenneke.
 * Fix quoting messages from the search view ([\#7466](https://github.com/matrix-org/matrix-react-sdk/pull/7466)). Fixes vector-im/element-web#20353.
 * Attribute fallback i18n strings with lang attribute ([\#7323](https://github.com/matrix-org/matrix-react-sdk/pull/7323)).
 * Fix spotlight cmd-k wrongly expanding left panel ([\#7463](https://github.com/matrix-org/matrix-react-sdk/pull/7463)). Fixes vector-im/element-web#20399.
 * Fix room_id check when adding user widgets ([\#7448](https://github.com/matrix-org/matrix-react-sdk/pull/7448)). Fixes vector-im/element-web#19382. Contributed by @bink.
 * Add new line in settings label ([\#7451](https://github.com/matrix-org/matrix-react-sdk/pull/7451)). Fixes vector-im/element-web#20365.
 * Fix handling incoming redactions in EventIndex ([\#7443](https://github.com/matrix-org/matrix-react-sdk/pull/7443)). Fixes vector-im/element-web#19326.
 * Fix room alias address isn't checked for validity before being shown as added ([\#7107](https://github.com/matrix-org/matrix-react-sdk/pull/7107)). Fixes vector-im/element-web#19609. Contributed by @Palid.
 * Call view accessibility fixes ([\#7439](https://github.com/matrix-org/matrix-react-sdk/pull/7439)). Fixes vector-im/element-web#18516.
 * Fix offscreen canvas breaking with split-brained firefox support ([\#7440](https://github.com/matrix-org/matrix-react-sdk/pull/7440)).
 * Removed red shield in forwarding preview. ([\#7447](https://github.com/matrix-org/matrix-react-sdk/pull/7447)). Contributed by @ankur12-1610.
 * Wrap status message ([\#7325](https://github.com/matrix-org/matrix-react-sdk/pull/7325)). Fixes vector-im/element-web#20092. Contributed by @SimonBrandner.
 * Move hideSender logic into state so it causes re-render ([\#7413](https://github.com/matrix-org/matrix-react-sdk/pull/7413)). Fixes vector-im/element-web#18448.
 * Fix dialpad positioning ([\#7446](https://github.com/matrix-org/matrix-react-sdk/pull/7446)). Fixes vector-im/element-web#20175. Contributed by @SimonBrandner.
 * Hide non-functional list options on Suggested sublist ([\#7410](https://github.com/matrix-org/matrix-react-sdk/pull/7410)). Fixes vector-im/element-web#20252.
 * Fix width overflow in mini composer overflow menu ([\#7411](https://github.com/matrix-org/matrix-react-sdk/pull/7411)). Fixes vector-im/element-web#20263.
 * Fix being wrongly sent to Home space when creating/joining/leaving rooms ([\#7418](https://github.com/matrix-org/matrix-react-sdk/pull/7418)). Fixes matrix-org/element-web-rageshakes#7331 vector-im/element-web#20246 and vector-im/element-web#20240.
 * Fix HTML Export where the data-mx-theme is `Light` not `light` ([\#7415](https://github.com/matrix-org/matrix-react-sdk/pull/7415)).
 * Don't disable username/password fields whilst doing wk-lookup ([\#7438](https://github.com/matrix-org/matrix-react-sdk/pull/7438)). Fixes vector-im/element-web#20121.
 * Prevent keyboard propagation out of context menus ([\#7437](https://github.com/matrix-org/matrix-react-sdk/pull/7437)). Fixes vector-im/element-web#20317.
 * Fix nulls leaking into geo urls ([\#7433](https://github.com/matrix-org/matrix-react-sdk/pull/7433)).
 * Fix zIndex of peristent apps in miniMode ([\#7429](https://github.com/matrix-org/matrix-react-sdk/pull/7429)).
 * Space panel should watch spaces for space name changes ([\#7432](https://github.com/matrix-org/matrix-react-sdk/pull/7432)).
 * Fix list formatting alternating on edit ([\#7422](https://github.com/matrix-org/matrix-react-sdk/pull/7422)). Fixes vector-im/element-web#20073. Contributed by @renancleyson-dev.
 * Don't show `Testing small changes` without UIFeature.Feedback ([\#7427](https://github.com/matrix-org/matrix-react-sdk/pull/7427)). Fixes vector-im/element-web#20298.
 * Fix invisible toggle space panel button ([\#7426](https://github.com/matrix-org/matrix-react-sdk/pull/7426)). Fixes vector-im/element-web#20279.
 * Fix legacy breadcrumbs wrongly showing up ([\#7425](https://github.com/matrix-org/matrix-react-sdk/pull/7425)).
 * Space Panel use SettingsStore instead of SpaceStore as source of truth ([\#7404](https://github.com/matrix-org/matrix-react-sdk/pull/7404)). Fixes vector-im/element-web#20250.
 * Fix inline code block nowrap issue ([\#7406](https://github.com/matrix-org/matrix-react-sdk/pull/7406)).
 * Fix notification badge for All Rooms space ([\#7401](https://github.com/matrix-org/matrix-react-sdk/pull/7401)). Fixes vector-im/element-web#20229.
 * Show error if could not load space hierarchy ([\#7399](https://github.com/matrix-org/matrix-react-sdk/pull/7399)). Fixes vector-im/element-web#20221.
 * Increase gap between ELS and the subsequent event to prevent overlap ([\#7391](https://github.com/matrix-org/matrix-react-sdk/pull/7391)). Fixes vector-im/element-web#18319.
 * Fix list of members in space preview ([\#7356](https://github.com/matrix-org/matrix-react-sdk/pull/7356)). Fixes vector-im/element-web#19781.
 * Fix sizing of e2e shield in bubble layout ([\#7394](https://github.com/matrix-org/matrix-react-sdk/pull/7394)). Fixes vector-im/element-web#19090.
 * Fix bubble radius wrong when followed by a state event from same user ([\#7393](https://github.com/matrix-org/matrix-react-sdk/pull/7393)). Fixes vector-im/element-web#18982.
 * Fix alignment between ELS and Events in bubble layout ([\#7392](https://github.com/matrix-org/matrix-react-sdk/pull/7392)). Fixes vector-im/element-web#19652 and vector-im/element-web#19057.
 * Don't include the accuracy parameter in location events if accuracy could not be determined. ([\#7375](https://github.com/matrix-org/matrix-react-sdk/pull/7375)).
 * Make compact layout only apply to Modern layout ([\#7382](https://github.com/matrix-org/matrix-react-sdk/pull/7382)). Fixes vector-im/element-web#18412.
 * Pin qrcode to fix e2e verification bug ([\#7378](https://github.com/matrix-org/matrix-react-sdk/pull/7378)). Fixes vector-im/element-web#20188.
 * Add internationalisation to progress strings in room export dialog ([\#7385](https://github.com/matrix-org/matrix-react-sdk/pull/7385)). Fixes vector-im/element-web#20208.
 * Prevent escape to cancel edit from also scrolling to bottom ([\#7380](https://github.com/matrix-org/matrix-react-sdk/pull/7380)). Fixes vector-im/element-web#20182.
 * Fix narrow mode composer buttons for polls labs ([\#7386](https://github.com/matrix-org/matrix-react-sdk/pull/7386)). Fixes vector-im/element-web#20067.
 * Fix useUserStatusMessage exploding on unknown user ([\#7365](https://github.com/matrix-org/matrix-react-sdk/pull/7365)).
 * Fix room join spinner in room list header ([\#7364](https://github.com/matrix-org/matrix-react-sdk/pull/7364)). Fixes vector-im/element-web#20139.
 * Fix room search sometimes not opening spotlight ([\#7363](https://github.com/matrix-org/matrix-react-sdk/pull/7363)). Fixes matrix-org/element-web-rageshakes#7288.

Changes in [1.9.8](https://github.com/vector-im/element-desktop/releases/tag/v1.9.8) (2021-12-20)
=================================================================================================

## ✨ Features
 * Include Vietnamese language ([\#20029](https://github.com/vector-im/element-web/pull/20029)).
 * Simple static location sharing ([\#19754](https://github.com/vector-im/element-web/pull/19754)).
 * Add support for the Indonesian language ([\#20032](https://github.com/vector-im/element-web/pull/20032)). Fixes vector-im/element-web#20030. Contributed by @Linerly.
 * Always unhide widgets on layout change (pinning a widget) ([\#7299](https://github.com/matrix-org/matrix-react-sdk/pull/7299)).
 * Update status message in the member list and user info panel when it is changed ([\#7338](https://github.com/matrix-org/matrix-react-sdk/pull/7338)). Fixes vector-im/element-web#20127. Contributed by @SimonBrandner.
 * Iterate space panel toggle collapse interaction ([\#7335](https://github.com/matrix-org/matrix-react-sdk/pull/7335)). Fixes vector-im/element-web#20079.
 * Spotlight search labs ([\#7116](https://github.com/matrix-org/matrix-react-sdk/pull/7116)). Fixes vector-im/element-web#19530.
 * Put room settings form elements in fieldsets ([\#7311](https://github.com/matrix-org/matrix-react-sdk/pull/7311)).
 * Add descriptions to ambiguous links for screen readers ([\#7310](https://github.com/matrix-org/matrix-react-sdk/pull/7310)).
 * Make tooltips keyboard accessible ([\#7281](https://github.com/matrix-org/matrix-react-sdk/pull/7281)).
 * Iterate room context menus for DMs ([\#7308](https://github.com/matrix-org/matrix-react-sdk/pull/7308)). Fixes vector-im/element-web#19527.
 * Update space panel expand mechanism ([\#7230](https://github.com/matrix-org/matrix-react-sdk/pull/7230)). Fixes vector-im/element-web#17993.
 * Add CSS variable to make the UI gaps consistent and fix the resize handle position ([\#7234](https://github.com/matrix-org/matrix-react-sdk/pull/7234)). Fixes vector-im/element-web#19904 and vector-im/element-web#19938.
 * Custom location sharing. ([\#7185](https://github.com/matrix-org/matrix-react-sdk/pull/7185)).
 * Simple static location sharing ([\#7135](https://github.com/matrix-org/matrix-react-sdk/pull/7135)).
 * Finish sending pending messages before leaving room ([\#7276](https://github.com/matrix-org/matrix-react-sdk/pull/7276)). Fixes vector-im/element-web#4702.
 * Dropdown follow wai-aria practices for expanding on arrow keys ([\#7277](https://github.com/matrix-org/matrix-react-sdk/pull/7277)). Fixes vector-im/element-web#3687.
 * Expose PL control for pinned events when lab enabled ([\#7278](https://github.com/matrix-org/matrix-react-sdk/pull/7278)). Fixes vector-im/element-web#5396.
 * In People & Favourites metaspaces always show all rooms ([\#7288](https://github.com/matrix-org/matrix-react-sdk/pull/7288)). Fixes vector-im/element-web#20048.
 * Don't allow calls when the connection the server has been lost ([\#7287](https://github.com/matrix-org/matrix-react-sdk/pull/7287)). Fixes vector-im/element-web#2096. Contributed by @SimonBrandner.
 * Analytics opt in for posthog ([\#6936](https://github.com/matrix-org/matrix-react-sdk/pull/6936)).
 * Don't inhibit current room notifications if user has Modal open ([\#7274](https://github.com/matrix-org/matrix-react-sdk/pull/7274)). Fixes vector-im/element-web#1118.
 * Remove the `Screen sharing is here!` dialog ([\#7266](https://github.com/matrix-org/matrix-react-sdk/pull/7266)). Fixes vector-im/element-web#18824. Contributed by @SimonBrandner.
 * Make composer buttons react to settings without having to change room ([\#7264](https://github.com/matrix-org/matrix-react-sdk/pull/7264)). Fixes vector-im/element-web#20011.
 * Decorate view keyboard shortcuts link as a link ([\#7260](https://github.com/matrix-org/matrix-react-sdk/pull/7260)). Fixes vector-im/element-web#20007.
 * Improve ease of focusing on Room list Search ([\#7255](https://github.com/matrix-org/matrix-react-sdk/pull/7255)). Fixes matrix-org/element-web-rageshakes#7017.
 * Autofocus device panel entry when renaming device ([\#7249](https://github.com/matrix-org/matrix-react-sdk/pull/7249)). Fixes vector-im/element-web#19984.
 * Update Space Panel scrollable region ([\#7245](https://github.com/matrix-org/matrix-react-sdk/pull/7245)). Fixes vector-im/element-web#19978.
 * Replace breadcrumbs with recently viewed menu ([\#7073](https://github.com/matrix-org/matrix-react-sdk/pull/7073)). Fixes vector-im/element-web#19528.
 * Tweaks to informational architecture 1.1 ([\#7052](https://github.com/matrix-org/matrix-react-sdk/pull/7052)). Fixes vector-im/element-web#19526, vector-im/element-web#19379, vector-im/element-web#17792, vector-im/element-web#16450, vector-im/element-web#19881, vector-im/element-web#19892, vector-im/element-web#19300, vector-im/element-web#19324, vector-im/element-web#17307, vector-im/element-web#17468 vector-im/element-web#19932 and vector-im/element-web#19956.

## 🐛 Bug Fixes
 * Enable webgl ([\#284](https://github.com/vector-im/element-desktop/pull/284)). Fixes vector-im/element-web#20132. Contributed by @SimonBrandner.
 * [Release] Fix inline code block nowrap issue ([\#7407](https://github.com/matrix-org/matrix-react-sdk/pull/7407)).
 * don't collapse spaces in inline code blocks (https ([\#7328](https://github.com/matrix-org/matrix-react-sdk/pull/7328)). Fixes vector-im/element-web#6051. Contributed by @HarHarLinks.
 * Fix accessibility regressions ([\#7336](https://github.com/matrix-org/matrix-react-sdk/pull/7336)).
 * Debounce User Info start dm "Message" button ([\#7357](https://github.com/matrix-org/matrix-react-sdk/pull/7357)). Fixes vector-im/element-web#7763.
 * Fix thread filter being cut-off on narrow screens ([\#7354](https://github.com/matrix-org/matrix-react-sdk/pull/7354)). Fixes vector-im/element-web#20146.
 * Fix upgraded rooms wrongly showing up in spotlight ([\#7341](https://github.com/matrix-org/matrix-react-sdk/pull/7341)). Fixes vector-im/element-web#20141.
 * Show votes in replied-to polls (pass in getRelationsForEvent) ([\#7345](https://github.com/matrix-org/matrix-react-sdk/pull/7345)). Fixes vector-im/element-web#20153.
 * Keep all previously approved widget capabilities when requesting new capabilities ([\#7340](https://github.com/matrix-org/matrix-react-sdk/pull/7340)). Contributed by @dhenneke.
 * Only show poll previews when the polls feature is enabled ([\#7331](https://github.com/matrix-org/matrix-react-sdk/pull/7331)).
 * No-op action:join if the user is already invited for scalar ([\#7334](https://github.com/matrix-org/matrix-react-sdk/pull/7334)). Fixes vector-im/element-web#20134.
 * Don't show polls in timeline if polls are disabled ([\#7332](https://github.com/matrix-org/matrix-react-sdk/pull/7332)). Fixes vector-im/element-web#20130.
 * Don't send a poll response event if you are voting for your current c… ([\#7326](https://github.com/matrix-org/matrix-react-sdk/pull/7326)). Fixes vector-im/element-web#20129.
 * Don't show options button when the user can't modify widgets ([\#7324](https://github.com/matrix-org/matrix-react-sdk/pull/7324)). Fixes vector-im/element-web#20114. Contributed by @SimonBrandner.
 * Add vertical spacing between buttons when they go over multiple lines ([\#7314](https://github.com/matrix-org/matrix-react-sdk/pull/7314)). Contributed by @twigleingrid.
 * Improve accessibility of opening space create menu ([\#7316](https://github.com/matrix-org/matrix-react-sdk/pull/7316)).
 * Correct tab order in room preview dialog ([\#7302](https://github.com/matrix-org/matrix-react-sdk/pull/7302)).
 * Fix favourites and people metaspaces not rendering their content ([\#7315](https://github.com/matrix-org/matrix-react-sdk/pull/7315)). Fixes vector-im/element-web#20070.
 * Make clear button images visible in high contrast theme ([\#7306](https://github.com/matrix-org/matrix-react-sdk/pull/7306)). Fixes vector-im/element-web#19931.
 * Fix html exporting and improve output size ([\#7312](https://github.com/matrix-org/matrix-react-sdk/pull/7312)). Fixes vector-im/element-web#19436 vector-im/element-web#20107 and vector-im/element-web#19441.
 * Fix textual message stripping new line ([\#7239](https://github.com/matrix-org/matrix-react-sdk/pull/7239)). Fixes vector-im/element-web#15320. Contributed by @renancleyson-dev.
 * Fix issue with room list resizer getting clipped in firefox ([\#7303](https://github.com/matrix-org/matrix-react-sdk/pull/7303)). Fixes vector-im/element-web#20076.
 * Fix wrong indentation with nested ordered list unnesting list on edit ([\#7300](https://github.com/matrix-org/matrix-react-sdk/pull/7300)). Contributed by @renancleyson-dev.
 * Fix input field behaviour inside context menus ([\#7293](https://github.com/matrix-org/matrix-react-sdk/pull/7293)). Fixes vector-im/element-web#19881.
 * Corrected the alignment of the Edit button on LoginPage. ([\#7292](https://github.com/matrix-org/matrix-react-sdk/pull/7292)). Contributed by @ankur12-1610.
 * Allow sharing manual location without giving location permission ([\#7295](https://github.com/matrix-org/matrix-react-sdk/pull/7295)). Fixes vector-im/element-web#20065. Contributed by @tulir.
 * Make emoji picker search placeholder localizable ([\#7294](https://github.com/matrix-org/matrix-react-sdk/pull/7294)).
 * Fix jump to bottom on message send ([\#7280](https://github.com/matrix-org/matrix-react-sdk/pull/7280)). Fixes vector-im/element-web#19859. Contributed by @SimonBrandner.
 * Fix: Warning: Unsupported style property pointer-events. Did you mean pointerEvents? ([\#7291](https://github.com/matrix-org/matrix-react-sdk/pull/7291)).
 * Add edits and replies to the right panel timeline & prepare the timelineCard to share code with threads ([\#7262](https://github.com/matrix-org/matrix-react-sdk/pull/7262)). Fixes vector-im/element-web#20012 and vector-im/element-web#19928.
 * Fix labs exploding when lab group is empty ([\#7290](https://github.com/matrix-org/matrix-react-sdk/pull/7290)). Fixes vector-im/element-web#20051.
 * Update URL when room aliases are modified ([\#7289](https://github.com/matrix-org/matrix-react-sdk/pull/7289)). Fixes vector-im/element-web#1616 and vector-im/element-web#1925.
 * Render mini user menu for when space panel is disabled ([\#7258](https://github.com/matrix-org/matrix-react-sdk/pull/7258)). Fixes vector-im/element-web#19998.
 * When accepting DM from People metaspace don't switch to Home ([\#7272](https://github.com/matrix-org/matrix-react-sdk/pull/7272)). Fixes vector-im/element-web#19995.
 * Fix CallPreview `room is null` ([\#7265](https://github.com/matrix-org/matrix-react-sdk/pull/7265)). Fixes vector-im/element-web#19990, vector-im/element-web#19972, matrix-org/element-web-rageshakes#7004 matrix-org/element-web-rageshakes#6991 and matrix-org/element-web-rageshakes#6964.
 * Fixes more instances of double-translation ([\#7259](https://github.com/matrix-org/matrix-react-sdk/pull/7259)). Fixes vector-im/element-web#20010.
 * Fix video calls ([\#7256](https://github.com/matrix-org/matrix-react-sdk/pull/7256)). Fixes vector-im/element-web#20008. Contributed by @SimonBrandner.
 * Fix broken i18n in Forgot & Change password ([\#7252](https://github.com/matrix-org/matrix-react-sdk/pull/7252)). Fixes vector-im/element-web#19989.
 * Fix setBotPower to not use `.content` ([\#7179](https://github.com/matrix-org/matrix-react-sdk/pull/7179)). Fixes vector-im/element-web#19845.
 * Break long words in pinned messages to prevent overflow ([\#7251](https://github.com/matrix-org/matrix-react-sdk/pull/7251)). Fixes vector-im/element-web#19985.
 * Disallow sending empty feedbacks ([\#7240](https://github.com/matrix-org/matrix-react-sdk/pull/7240)).
 * Fix wrongly sized default sub-space icons in space panel ([\#7243](https://github.com/matrix-org/matrix-react-sdk/pull/7243)). Fixes vector-im/element-web#19973.
 * Hide clear cache and reload button if crash is before client init ([\#7242](https://github.com/matrix-org/matrix-react-sdk/pull/7242)). Fixes matrix-org/element-web-rageshakes#6996.
 * Fix automatic space switching wrongly going via Home for room aliases ([\#7247](https://github.com/matrix-org/matrix-react-sdk/pull/7247)). Fixes vector-im/element-web#19974.
 * Fix links being parsed as markdown links improperly ([\#7200](https://github.com/matrix-org/matrix-react-sdk/pull/7200)). Contributed by @Palid.

Changes in [1.9.7](https://github.com/vector-im/element-desktop/releases/tag/v1.9.7) (2021-12-13)
=================================================================================================

## 🔒 SECURITY FIXES
* Security release with updated version of Olm to fix https://matrix.org/blog/2021/12/03/pre-disclosure-upcoming-security-release-of-libolm-and-matrix-js-sdk
* Upgrade Electron to 13.5.2 to fix https://matrix.org/blog/2022/01/31/high-severity-vulnerability-in-element-desktop-1-9-6-and-earlier (https://github.com/vector-im/element-desktop/security/advisories/GHSA-mjrg-9f8r-h3m7)

## 🐛 Bug Fixes
* Fix a crash on logout

Changes in [1.9.6](https://github.com/vector-im/element-desktop/releases/tag/v1.9.6) (2021-12-06)
=================================================================================================

## ✨ Features
 * Add unread indicator to the timelineCard header icon ([\#7156](https://github.com/matrix-org/matrix-react-sdk/pull/7156)). Fixes vector-im/element-web#19635.
 * Only show core navigation elements (call/chat/notification/info) when a widget is maximised ([\#7114](https://github.com/matrix-org/matrix-react-sdk/pull/7114)). Fixes vector-im/element-web#19632.
 * Improve ThreadPanel ctx menu accessibility ([\#7217](https://github.com/matrix-org/matrix-react-sdk/pull/7217)). Fixes vector-im/element-web#19885.
 * Allow filtering room list during treeview navigation ([\#7219](https://github.com/matrix-org/matrix-react-sdk/pull/7219)). Fixes vector-im/element-web#14702.
 * Add right panel chat timeline ([\#7112](https://github.com/matrix-org/matrix-react-sdk/pull/7112)). Fixes vector-im/element-web#19633.
 * Hide server options hint when disable_custom_urls is true ([\#7215](https://github.com/matrix-org/matrix-react-sdk/pull/7215)). Fixes vector-im/element-web#19919.
 * Improve right panel resize handle usability ([\#7204](https://github.com/matrix-org/matrix-react-sdk/pull/7204)). Fixes vector-im/element-web#15145. Contributed by @weeman1337.
 * Spaces quick settings ([\#7196](https://github.com/matrix-org/matrix-react-sdk/pull/7196)).
 * Maximised widgets always force a call to be shown in PIP mode ([\#7163](https://github.com/matrix-org/matrix-react-sdk/pull/7163)). Fixes vector-im/element-web#19637.
 * Group Labs flags ([\#7190](https://github.com/matrix-org/matrix-react-sdk/pull/7190)).
 * Show room context details in forward dialog ([\#7162](https://github.com/matrix-org/matrix-react-sdk/pull/7162)). Fixes vector-im/element-web#19793.
 * Remove chevrons from RoomSummaryCard_Button ([\#7137](https://github.com/matrix-org/matrix-react-sdk/pull/7137)). Fixes vector-im/element-web#19644.
 * Disable op/deop commands where user has no permissions ([\#7161](https://github.com/matrix-org/matrix-react-sdk/pull/7161)). Fixes vector-im/element-web#15390.
 * Add option to change the size of images/videos in the timeline ([\#7017](https://github.com/matrix-org/matrix-react-sdk/pull/7017)). Fixes vector-im/element-meta#49 vector-im/element-web#1520 and vector-im/element-web#19498.

## 🐛 Bug Fixes
 * Fix left panel glow in Safari ([\#7236](https://github.com/matrix-org/matrix-react-sdk/pull/7236)). Fixes vector-im/element-web#19863.
 * Fix newline on edit messages with quotes ([\#7227](https://github.com/matrix-org/matrix-react-sdk/pull/7227)). Fixes vector-im/element-web#12535. Contributed by @renancleyson-dev.
 * Guard against null refs in findSiblingElement ([\#7228](https://github.com/matrix-org/matrix-react-sdk/pull/7228)).
 * Tweak bottom of space panel buttons in expanded state ([\#7213](https://github.com/matrix-org/matrix-react-sdk/pull/7213)). Fixes vector-im/element-web#19921.
 * Fix multiline paragraph rendering as single line ([\#7210](https://github.com/matrix-org/matrix-react-sdk/pull/7210)). Fixes vector-im/element-web#8786. Contributed by @renancleyson-dev.
 * Improve room list message previews ([\#7224](https://github.com/matrix-org/matrix-react-sdk/pull/7224)). Fixes vector-im/element-web#17101 and vector-im/element-web#16169.
 * Fix EmojiPicker lazy loaded rendering bug ([\#7225](https://github.com/matrix-org/matrix-react-sdk/pull/7225)). Fixes vector-im/element-web#15341.
 * Prevent default avatar in UserInfo having pointer cursor ([\#7218](https://github.com/matrix-org/matrix-react-sdk/pull/7218)). Fixes vector-im/element-web#13872.
 * Prevent duplicate avatars in Event List Summaries ([\#7222](https://github.com/matrix-org/matrix-react-sdk/pull/7222)). Fixes vector-im/element-web#17706.
 * Respect the home page as a context for the Home space ([\#7216](https://github.com/matrix-org/matrix-react-sdk/pull/7216)). Fixes vector-im/element-web#19554.
 * Fix RoomUpgradeWarningBar exploding ([\#7214](https://github.com/matrix-org/matrix-react-sdk/pull/7214)). Fixes vector-im/element-web#19920.
 * Polish threads misalignments and UI diversion ([\#7209](https://github.com/matrix-org/matrix-react-sdk/pull/7209)). Fixes vector-im/element-web#19772, vector-im/element-web#19710 vector-im/element-web#19629 and vector-im/element-web#19711.
 * Fix Manage Restricted Join Rule Dialog for Spaces ([\#7208](https://github.com/matrix-org/matrix-react-sdk/pull/7208)). Fixes vector-im/element-web#19610.
 * Fix wrongly showing unpin in pinned messages tile with no perms ([\#7197](https://github.com/matrix-org/matrix-react-sdk/pull/7197)). Fixes vector-im/element-web#19886.
 * Make image size constrained by height when using the ImageSize.Large option ([\#7171](https://github.com/matrix-org/matrix-react-sdk/pull/7171)). Fixes vector-im/element-web#19788.
 * Prevent programmatic scrolling within truncated room sublists ([\#7191](https://github.com/matrix-org/matrix-react-sdk/pull/7191)).
 * Remove leading slash from /addwidget Jitsi confs ([\#7175](https://github.com/matrix-org/matrix-react-sdk/pull/7175)). Fixes vector-im/element-web#19839. Contributed by @AndrewFerr.
 * Fix automatic composer focus, regressed by threads work ([\#7167](https://github.com/matrix-org/matrix-react-sdk/pull/7167)). Fixes vector-im/element-web#19479.
 * Show space members when not invited even if summary didn't fail ([\#7153](https://github.com/matrix-org/matrix-react-sdk/pull/7153)). Fixes vector-im/element-web#19781.
 * Prevent custom power levels from breaking roles & permissions tab ([\#7160](https://github.com/matrix-org/matrix-react-sdk/pull/7160)). Fixes vector-im/element-web#19812.
 * Room Context Menu should respond to tag changes ([\#7154](https://github.com/matrix-org/matrix-react-sdk/pull/7154)). Fixes vector-im/element-web#19776.
 * Fix an edge case when trying to join an upgraded room ([\#7159](https://github.com/matrix-org/matrix-react-sdk/pull/7159)).

Changes in [1.9.5](https://github.com/vector-im/element-desktop/releases/tag/v1.9.5) (2021-11-22)
=================================================================================================

## ✨ Features
 * Make double-clicking the PiP take you to the call room ([\#7142](https://github.com/matrix-org/matrix-react-sdk/pull/7142)). Fixes vector-im/element-web#18421 vector-im/element-web#15920 and vector-im/element-web#18421. Contributed by @SimonBrandner.
 * Add maximise widget functionality ([\#7098](https://github.com/matrix-org/matrix-react-sdk/pull/7098)). Fixes vector-im/element-web#19619, vector-im/element-web#19621 vector-im/element-web#19760 and vector-im/element-web#19619.
 * Add rainfall effect ([\#7086](https://github.com/matrix-org/matrix-react-sdk/pull/7086)). Contributed by @justjosias.
 * Add root folder to zip file created by export chat feature ([\#7097](https://github.com/matrix-org/matrix-react-sdk/pull/7097)). Fixes vector-im/element-web#19653 and vector-im/element-web#19653. Contributed by @aaronraimist.
 * Improve VoIP UI/UX ([\#7048](https://github.com/matrix-org/matrix-react-sdk/pull/7048)). Fixes vector-im/element-web#19513 and vector-im/element-web#19513. Contributed by @SimonBrandner.
 * Unified room context menus ([\#7072](https://github.com/matrix-org/matrix-react-sdk/pull/7072)). Fixes vector-im/element-web#19527 and vector-im/element-web#19527.
 * In forgot password screen, show validation errors inline in the form, instead of in modals ([\#7113](https://github.com/matrix-org/matrix-react-sdk/pull/7113)). Contributed by @psrpinto.
 * Implement more meta-spaces ([\#7077](https://github.com/matrix-org/matrix-react-sdk/pull/7077)). Fixes vector-im/element-web#18634 vector-im/element-web#17295 and vector-im/element-web#18634.
 * Expose power level control for m.space.child ([\#7120](https://github.com/matrix-org/matrix-react-sdk/pull/7120)).
 * Forget member-list query when switching out of a room ([\#7093](https://github.com/matrix-org/matrix-react-sdk/pull/7093)). Fixes vector-im/element-web#19432 and vector-im/element-web#19432. Contributed by @SimonBrandner.
 * Do pre-submit availability check on username during registration ([\#6978](https://github.com/matrix-org/matrix-react-sdk/pull/6978)). Fixes vector-im/element-web#9545 and vector-im/element-web#9545.

## 🐛 Bug Fixes
 * Adjust recovery key button sizes depending on text width ([\#7134](https://github.com/matrix-org/matrix-react-sdk/pull/7134)). Fixes vector-im/element-web#19511 and vector-im/element-web#19511. Contributed by @weeman1337.
 * Fix bulk invite button getting a negative count ([\#7122](https://github.com/matrix-org/matrix-react-sdk/pull/7122)). Fixes vector-im/element-web#19466 and vector-im/element-web#19466. Contributed by @renancleyson-dev.
 * Fix maximised / pinned widget state being loaded correctly ([\#7146](https://github.com/matrix-org/matrix-react-sdk/pull/7146)). Fixes vector-im/element-web#19768 and vector-im/element-web#19768.
 * Don't reload the page when user hits enter when entering ban reason ([\#7145](https://github.com/matrix-org/matrix-react-sdk/pull/7145)). Fixes vector-im/element-web#19763 and vector-im/element-web#19763.
 * Fix timeline text when sharing room layout ([\#7140](https://github.com/matrix-org/matrix-react-sdk/pull/7140)). Fixes vector-im/element-web#19622 and vector-im/element-web#19622.
 * Fix look of emoji verification ([\#7133](https://github.com/matrix-org/matrix-react-sdk/pull/7133)). Fixes vector-im/element-web#19740 and vector-im/element-web#19740. Contributed by @SimonBrandner.
 * Fixes element not remembering widget hidden state per room ([\#7136](https://github.com/matrix-org/matrix-react-sdk/pull/7136)). Fixes vector-im/element-web#16672, matrix-org/element-web-rageshakes#4407, vector-im/element-web#15718 vector-im/element-web#15768 and vector-im/element-web#16672.
 * Don't keep spinning if joining space child failed ([\#7129](https://github.com/matrix-org/matrix-react-sdk/pull/7129)). Fixes matrix-org/element-web-rageshakes#6813 and matrix-org/element-web-rageshakes#6813.
 * Guard around SpaceStore onAccountData handler prevEvent ([\#7123](https://github.com/matrix-org/matrix-react-sdk/pull/7123)). Fixes vector-im/element-web#19705 and vector-im/element-web#19705.
 * Fix missing spaces in threads copy ([\#7119](https://github.com/matrix-org/matrix-react-sdk/pull/7119)). Fixes vector-im/element-web#19702 and vector-im/element-web#19702.
 * Fix hover tile border ([\#7117](https://github.com/matrix-org/matrix-react-sdk/pull/7117)). Fixes vector-im/element-web#19698 and vector-im/element-web#19698. Contributed by @SimonBrandner.
 * Fix quote button ([\#7096](https://github.com/matrix-org/matrix-react-sdk/pull/7096)). Fixes vector-im/element-web#19659 and vector-im/element-web#19659. Contributed by @SimonBrandner.
 * Fix space panel layout edge cases ([\#7101](https://github.com/matrix-org/matrix-react-sdk/pull/7101)). Fixes vector-im/element-web#19668 and vector-im/element-web#19668.
 * Update powerlevel/role when the user changes in the user info panel ([\#7099](https://github.com/matrix-org/matrix-react-sdk/pull/7099)). Fixes vector-im/element-web#19666 and vector-im/element-web#19666. Contributed by @SimonBrandner.
 * Fix avatar disappearing when setting a room topic ([\#7092](https://github.com/matrix-org/matrix-react-sdk/pull/7092)). Fixes vector-im/element-web#19226 and vector-im/element-web#19226. Contributed by @SimonBrandner.
 * Fix possible infinite loop on widget start ([\#7071](https://github.com/matrix-org/matrix-react-sdk/pull/7071)). Fixes vector-im/element-web#15494 and vector-im/element-web#15494.
 * Use device IDs for nameless devices in device list ([\#7081](https://github.com/matrix-org/matrix-react-sdk/pull/7081)). Fixes vector-im/element-web#19608 and vector-im/element-web#19608.
 * Don't re-sort rooms on no-op RoomUpdateCause.PossibleTagChange ([\#7053](https://github.com/matrix-org/matrix-react-sdk/pull/7053)). Contributed by @bradtgmurray.

Changes in [1.9.4](https://github.com/vector-im/element-desktop/releases/tag/v1.9.4) (2021-11-08)
=================================================================================================

## ✨ Features
 * Improve the look of tooltips ([\#7049](https://github.com/matrix-org/matrix-react-sdk/pull/7049)). Contributed by @SimonBrandner.
 * Improve the look of the spinner ([\#6083](https://github.com/matrix-org/matrix-react-sdk/pull/6083)). Contributed by @SimonBrandner.
 * Polls: Creation form & start event ([\#7001](https://github.com/matrix-org/matrix-react-sdk/pull/7001)).
 * Show a gray shield when encrypted by deleted session ([\#6119](https://github.com/matrix-org/matrix-react-sdk/pull/6119)). Contributed by @SimonBrandner.
 * Silence some widgets for better screen reader presentation. ([\#7057](https://github.com/matrix-org/matrix-react-sdk/pull/7057)). Contributed by @ndarilek.
 * Make message separator more accessible. ([\#7056](https://github.com/matrix-org/matrix-react-sdk/pull/7056)). Contributed by @ndarilek.
 * Give each room directory entry the `listitem` role to correspond with the containing `list`. ([\#7035](https://github.com/matrix-org/matrix-react-sdk/pull/7035)). Contributed by @ndarilek.
 * Implement RequiresClient capability for widgets ([\#7005](https://github.com/matrix-org/matrix-react-sdk/pull/7005)). Fixes vector-im/element-web#15744 and vector-im/element-web#15744.
 * Respect the system high contrast setting when using system theme ([\#7043](https://github.com/matrix-org/matrix-react-sdk/pull/7043)).
 * Remove redundant duplicate mimetype field which doesn't conform to spec ([\#7045](https://github.com/matrix-org/matrix-react-sdk/pull/7045)). Fixes vector-im/element-web#17145 and vector-im/element-web#17145.
 * Make join button on space hierarchy action in the background ([\#7041](https://github.com/matrix-org/matrix-react-sdk/pull/7041)). Fixes vector-im/element-web#17388 and vector-im/element-web#17388.
 * Add a high contrast theme (a variant of the light theme) ([\#7036](https://github.com/matrix-org/matrix-react-sdk/pull/7036)).
 * Improve timeline message for restricted join rule changes ([\#6984](https://github.com/matrix-org/matrix-react-sdk/pull/6984)). Fixes vector-im/element-web#18980 and vector-im/element-web#18980.
 * Improve the appearance of the font size slider ([\#7038](https://github.com/matrix-org/matrix-react-sdk/pull/7038)).
 * Improve RovingTabIndex & Room List filtering performance ([\#6987](https://github.com/matrix-org/matrix-react-sdk/pull/6987)). Fixes vector-im/element-web#17864 and vector-im/element-web#17864.
 * Remove outdated Spaces restricted rooms warning ([\#6927](https://github.com/matrix-org/matrix-react-sdk/pull/6927)).
 * Make /msg <message> param optional for more flexibility ([\#7028](https://github.com/matrix-org/matrix-react-sdk/pull/7028)). Fixes vector-im/element-web#19481 and vector-im/element-web#19481.
 * Add decoration to space hierarchy for tiles which have already been j… ([\#6969](https://github.com/matrix-org/matrix-react-sdk/pull/6969)). Fixes vector-im/element-web#18755 and vector-im/element-web#18755.
 * Add insert link button to the format bar ([\#5879](https://github.com/matrix-org/matrix-react-sdk/pull/5879)). Contributed by @SimonBrandner.
 * Improve visibility of font size chooser ([\#6988](https://github.com/matrix-org/matrix-react-sdk/pull/6988)).
 * Soften border-radius on selected/hovered messages ([\#6525](https://github.com/matrix-org/matrix-react-sdk/pull/6525)). Fixes vector-im/element-web#18108. Contributed by @SimonBrandner.
 * Add a developer mode flag and use it for accessing space timelines ([\#6994](https://github.com/matrix-org/matrix-react-sdk/pull/6994)). Fixes vector-im/element-web#19416 and vector-im/element-web#19416.
 * Position toggle switch more clearly ([\#6914](https://github.com/matrix-org/matrix-react-sdk/pull/6914)). Contributed by @CicadaCinema.
 * Validate email address in forgot password dialog ([\#6983](https://github.com/matrix-org/matrix-react-sdk/pull/6983)). Fixes vector-im/element-web#9978 and vector-im/element-web#9978. Contributed by @psrpinto.
 * Handle and i18n M_THREEPID_IN_USE during registration ([\#6986](https://github.com/matrix-org/matrix-react-sdk/pull/6986)). Fixes vector-im/element-web#13767 and vector-im/element-web#13767.
 * For space invite previews, use room summary API to get the right member count ([\#6982](https://github.com/matrix-org/matrix-react-sdk/pull/6982)). Fixes vector-im/element-web#19123 and vector-im/element-web#19123.
 * Simplify Space Panel notification badge layout ([\#6977](https://github.com/matrix-org/matrix-react-sdk/pull/6977)). Fixes vector-im/element-web#18527 and vector-im/element-web#18527.
 * Use prettier hsName during 3pid registration where possible ([\#6980](https://github.com/matrix-org/matrix-react-sdk/pull/6980)). Fixes vector-im/element-web#19162 and vector-im/element-web#19162.

## 🐛 Bug Fixes
 * Add a condition to only activate the resizer which belongs to the clicked handle ([\#7055](https://github.com/matrix-org/matrix-react-sdk/pull/7055)). Fixes vector-im/element-web#19521 and vector-im/element-web#19521.
 * Restore composer focus after event edit ([\#7065](https://github.com/matrix-org/matrix-react-sdk/pull/7065)). Fixes vector-im/element-web#19469 and vector-im/element-web#19469.
 * Don't apply message bubble visual style to media messages ([\#7040](https://github.com/matrix-org/matrix-react-sdk/pull/7040)).
 * Handle no selected screen when screen-sharing ([\#7018](https://github.com/matrix-org/matrix-react-sdk/pull/7018)). Fixes vector-im/element-web#19460 and vector-im/element-web#19460. Contributed by @SimonBrandner.
 * Add history entry before completing emoji ([\#7007](https://github.com/matrix-org/matrix-react-sdk/pull/7007)). Fixes vector-im/element-web#19177 and vector-im/element-web#19177. Contributed by @RafaelGoncalves8.
 * Add padding between controls on edit form in message bubbles ([\#7039](https://github.com/matrix-org/matrix-react-sdk/pull/7039)).
 * Respect the roomState right container request for the Jitsi widget ([\#7033](https://github.com/matrix-org/matrix-react-sdk/pull/7033)). Fixes vector-im/element-web#16552 and vector-im/element-web#16552.
 * Fix cannot read length of undefined for room upgrades ([\#7037](https://github.com/matrix-org/matrix-react-sdk/pull/7037)). Fixes vector-im/element-web#19509 and vector-im/element-web#19509.
 * Cleanup re-dispatching around timelines and composers ([\#7023](https://github.com/matrix-org/matrix-react-sdk/pull/7023)). Fixes vector-im/element-web#19491 and vector-im/element-web#19491. Contributed by @SimonBrandner.
 * Fix removing a room from a Space and interaction with `m.space.parent` ([\#6944](https://github.com/matrix-org/matrix-react-sdk/pull/6944)). Fixes vector-im/element-web#19363 and vector-im/element-web#19363.
 * Fix recent css regression ([\#7022](https://github.com/matrix-org/matrix-react-sdk/pull/7022)). Fixes vector-im/element-web#19470 and vector-im/element-web#19470. Contributed by @CicadaCinema.
 * Fix ModalManager reRender racing with itself ([\#7027](https://github.com/matrix-org/matrix-react-sdk/pull/7027)). Fixes vector-im/element-web#19489 and vector-im/element-web#19489.
 * Fix fullscreening a call while connecting ([\#7019](https://github.com/matrix-org/matrix-react-sdk/pull/7019)). Fixes vector-im/element-web#19309 and vector-im/element-web#19309. Contributed by @SimonBrandner.
 * Allow scrolling right in reply-quoted code block ([\#7024](https://github.com/matrix-org/matrix-react-sdk/pull/7024)). Fixes vector-im/element-web#19487 and vector-im/element-web#19487. Contributed by @SimonBrandner.
 * Fix dark theme codeblock colors ([\#6384](https://github.com/matrix-org/matrix-react-sdk/pull/6384)). Fixes vector-im/element-web#17998. Contributed by @SimonBrandner.
 * Show passphrase input label ([\#6992](https://github.com/matrix-org/matrix-react-sdk/pull/6992)). Fixes vector-im/element-web#19428 and vector-im/element-web#19428. Contributed by @RafaelGoncalves8.
 * Always render disabled settings as disabled ([\#7014](https://github.com/matrix-org/matrix-react-sdk/pull/7014)).
 * Make "Security Phrase" placeholder look consistent cross-browser ([\#6870](https://github.com/matrix-org/matrix-react-sdk/pull/6870)). Fixes vector-im/element-web#19006 and vector-im/element-web#19006. Contributed by @neer17.
 * Fix direction override characters breaking member event text direction ([\#6999](https://github.com/matrix-org/matrix-react-sdk/pull/6999)).
 * Remove redundant text in verification dialogs ([\#6993](https://github.com/matrix-org/matrix-react-sdk/pull/6993)). Fixes vector-im/element-web#19290 and vector-im/element-web#19290. Contributed by @RafaelGoncalves8.
 * Fix space panel name overflowing ([\#6995](https://github.com/matrix-org/matrix-react-sdk/pull/6995)). Fixes vector-im/element-web#19455 and vector-im/element-web#19455.
 * Fix conflicting CSS on syntax highlighted blocks ([\#6991](https://github.com/matrix-org/matrix-react-sdk/pull/6991)). Fixes vector-im/element-web#19445 and vector-im/element-web#19445.

Changes in [1.9.3](https://github.com/vector-im/element-desktop/releases/tag/v1.9.3) (2021-10-25)
=================================================================================================

## ✨ Features
 * Convert the "Cryptography" settings panel to an HTML table to assist screen reader users. ([\#6968](https://github.com/matrix-org/matrix-react-sdk/pull/6968)). Contributed by [andybalaam](https://github.com/andybalaam).
 * Swap order of private space creation and tweak copy ([\#6967](https://github.com/matrix-org/matrix-react-sdk/pull/6967)). Fixes vector-im/element-web#18768 and vector-im/element-web#18768.
 * Add spacing to Room settings - Notifications subsection ([\#6962](https://github.com/matrix-org/matrix-react-sdk/pull/6962)). Contributed by [CicadaCinema](https://github.com/CicadaCinema).
 * Use HTML tables for some tabular user interface areas, to assist with screen reader use ([\#6955](https://github.com/matrix-org/matrix-react-sdk/pull/6955)). Contributed by [andybalaam](https://github.com/andybalaam).
 * Fix space invite edge cases ([\#6884](https://github.com/matrix-org/matrix-react-sdk/pull/6884)). Fixes vector-im/element-web#19010 vector-im/element-web#17345 and vector-im/element-web#19010.
 * Allow options to cascade kicks/bans throughout spaces ([\#6829](https://github.com/matrix-org/matrix-react-sdk/pull/6829)). Fixes vector-im/element-web#18969 and vector-im/element-web#18969.
 * Make public space alias field mandatory again ([\#6921](https://github.com/matrix-org/matrix-react-sdk/pull/6921)). Fixes vector-im/element-web#19003 and vector-im/element-web#19003.
 * Add progress bar to restricted room upgrade dialog ([\#6919](https://github.com/matrix-org/matrix-react-sdk/pull/6919)). Fixes vector-im/element-web#19146 and vector-im/element-web#19146.
 * Add customisation point for visibility of invites and room creation ([\#6922](https://github.com/matrix-org/matrix-react-sdk/pull/6922)). Fixes vector-im/element-web#19331 and vector-im/element-web#19331.
 * Inhibit `Unable to get validated threepid` error during UIA ([\#6928](https://github.com/matrix-org/matrix-react-sdk/pull/6928)). Fixes vector-im/element-web#18883 and vector-im/element-web#18883.
 * Tweak room list skeleton UI height and behaviour ([\#6926](https://github.com/matrix-org/matrix-react-sdk/pull/6926)). Fixes vector-im/element-web#18231 vector-im/element-web#16581 and vector-im/element-web#18231.
 * If public room creation fails, retry without publishing it ([\#6872](https://github.com/matrix-org/matrix-react-sdk/pull/6872)). Fixes vector-im/element-web#19194 and vector-im/element-web#19194. Contributed by [AndrewFerr](https://github.com/AndrewFerr).
 * Iterate invite your teammates to Space view ([\#6925](https://github.com/matrix-org/matrix-react-sdk/pull/6925)). Fixes vector-im/element-web#18772 and vector-im/element-web#18772.
 * Make placeholder more grey when no input ([\#6840](https://github.com/matrix-org/matrix-react-sdk/pull/6840)). Fixes vector-im/element-web#17243 and vector-im/element-web#17243. Contributed by [wlach](https://github.com/wlach).
 * Respect tombstones in locally known rooms for Space children ([\#6906](https://github.com/matrix-org/matrix-react-sdk/pull/6906)). Fixes vector-im/element-web#19246 vector-im/element-web#19256 and vector-im/element-web#19246.
 * Improve emoji shortcodes generated from annotations ([\#6907](https://github.com/matrix-org/matrix-react-sdk/pull/6907)). Fixes vector-im/element-web#19304 and vector-im/element-web#19304.
 * Hide kick & ban options in UserInfo when looking at own profile ([\#6911](https://github.com/matrix-org/matrix-react-sdk/pull/6911)). Fixes vector-im/element-web#19066 and vector-im/element-web#19066.
 * Add progress bar to Community to Space migration tool ([\#6887](https://github.com/matrix-org/matrix-react-sdk/pull/6887)). Fixes vector-im/element-web#19216 and vector-im/element-web#19216.

## 🐛 Bug Fixes
 * Fix leave space cancel button exploding ([\#6966](https://github.com/matrix-org/matrix-react-sdk/pull/6966)).
 * Fix edge case behaviour of the space join spinner for guests ([\#6972](https://github.com/matrix-org/matrix-react-sdk/pull/6972)). Fixes vector-im/element-web#19359 and vector-im/element-web#19359.
 * Convert emoticon to emoji at the end of a line on send even if the cursor isn't there ([\#6965](https://github.com/matrix-org/matrix-react-sdk/pull/6965)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix text overflows button on Home page ([\#6898](https://github.com/matrix-org/matrix-react-sdk/pull/6898)). Fixes vector-im/element-web#19180 and vector-im/element-web#19180. Contributed by [oliver-pham](https://github.com/oliver-pham).
 * Space Room View should react to join rule changes down /sync ([\#6945](https://github.com/matrix-org/matrix-react-sdk/pull/6945)). Fixes vector-im/element-web#19390 and vector-im/element-web#19390.
 * Hide leave section button if user isn't in the room e.g peeking ([\#6920](https://github.com/matrix-org/matrix-react-sdk/pull/6920)). Fixes vector-im/element-web#17410 and vector-im/element-web#17410.
 * Fix bug where room list would get stuck showing no rooms ([\#6939](https://github.com/matrix-org/matrix-react-sdk/pull/6939)). Fixes vector-im/element-web#19373 and vector-im/element-web#19373.
 * Update room settings dialog title when room name changes ([\#6916](https://github.com/matrix-org/matrix-react-sdk/pull/6916)). Fixes vector-im/element-web#17480 and vector-im/element-web#17480. Contributed by [psrpinto](https://github.com/psrpinto).
 * Fix editing losing emote-ness and rainbow-ness of messages ([\#6931](https://github.com/matrix-org/matrix-react-sdk/pull/6931)). Fixes vector-im/element-web#19350 and vector-im/element-web#19350.
 * Remove semicolon from notifications panel ([\#6930](https://github.com/matrix-org/matrix-react-sdk/pull/6930)). Contributed by [robintown](https://github.com/robintown).
 * Prevent profile image in left panel's backdrop from being selected ([\#6924](https://github.com/matrix-org/matrix-react-sdk/pull/6924)). Contributed by [rom4nik](https://github.com/rom4nik).
 * Validate that the phone number verification field is filled before allowing user to submit ([\#6918](https://github.com/matrix-org/matrix-react-sdk/pull/6918)). Fixes vector-im/element-web#19316 and vector-im/element-web#19316. Contributed by [VFermat](https://github.com/VFermat).
 * Updated how save button becomes disabled in room settings to listen for all fields instead of the most recent ([\#6917](https://github.com/matrix-org/matrix-react-sdk/pull/6917)). Contributed by [LoganArnett](https://github.com/LoganArnett).
 * Use FocusLock around ContextMenus to simplify focus management ([\#6311](https://github.com/matrix-org/matrix-react-sdk/pull/6311)). Fixes vector-im/element-web#19259 and vector-im/element-web#19259.
 * Fix space hierarchy pagination ([\#6908](https://github.com/matrix-org/matrix-react-sdk/pull/6908)). Fixes vector-im/element-web#19276 and vector-im/element-web#19276.
 * Fix spaces keyboard shortcuts not working for last space ([\#6909](https://github.com/matrix-org/matrix-react-sdk/pull/6909)). Fixes vector-im/element-web#19255 and vector-im/element-web#19255.
 * Use fallback avatar only for DMs with 2 people. ([\#6895](https://github.com/matrix-org/matrix-react-sdk/pull/6895)). Fixes vector-im/element-web#18747 and vector-im/element-web#18747. Contributed by [andybalaam](https://github.com/andybalaam).

Changes in [1.9.2](https://github.com/vector-im/element-desktop/releases/tag/v1.9.2) (2021-10-12)
=================================================================================================

## 🐛 Bug Fixes
 * Upgrade to matrix-js-sdk#14.0.1

Changes in [1.9.1](https://github.com/vector-im/element-desktop/releases/tag/v1.9.1) (2021-10-11)
=================================================================================================

## ✨ Features
 * Decrease profile button touch target ([\#6900](https://github.com/matrix-org/matrix-react-sdk/pull/6900)). Contributed by [ColonisationCaptain](https://github.com/ColonisationCaptain).
 * Don't let click events propagate out of context menus ([\#6892](https://github.com/matrix-org/matrix-react-sdk/pull/6892)).
 * Allow closing Dropdown via its chevron ([\#6885](https://github.com/matrix-org/matrix-react-sdk/pull/6885)). Fixes vector-im/element-web#19030 and vector-im/element-web#19030.
 * Improve AUX panel behaviour ([\#6699](https://github.com/matrix-org/matrix-react-sdk/pull/6699)). Fixes vector-im/element-web#18787 and vector-im/element-web#18787. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * A nicer opening animation for the Image View ([\#6454](https://github.com/matrix-org/matrix-react-sdk/pull/6454)). Fixes vector-im/element-web#18186 and vector-im/element-web#18186. Contributed by [SimonBrandner](https://github.com/SimonBrandner).

## 🐛 Bug Fixes
 * [Release] Fix space hierarchy pagination ([\#6910](https://github.com/matrix-org/matrix-react-sdk/pull/6910)).
 * Fix leaving space via other client leaving you in undefined-land ([\#6891](https://github.com/matrix-org/matrix-react-sdk/pull/6891)). Fixes vector-im/element-web#18455 and vector-im/element-web#18455.
 * Handle newer voice message encrypted event format for chat export ([\#6893](https://github.com/matrix-org/matrix-react-sdk/pull/6893)). Contributed by [jaiwanth-v](https://github.com/jaiwanth-v).
 * Fix pagination when filtering space hierarchy ([\#6876](https://github.com/matrix-org/matrix-react-sdk/pull/6876)). Fixes vector-im/element-web#19235 and vector-im/element-web#19235.
 * Fix spaces null-guard breaking the dispatcher settings watching ([\#6886](https://github.com/matrix-org/matrix-react-sdk/pull/6886)). Fixes vector-im/element-web#19223 and vector-im/element-web#19223.
 * Fix space children without specific `order` being sorted after those with one ([\#6878](https://github.com/matrix-org/matrix-react-sdk/pull/6878)). Fixes vector-im/element-web#19192 and vector-im/element-web#19192.
 * Ensure that sub-spaces aren't considered for notification badges ([\#6881](https://github.com/matrix-org/matrix-react-sdk/pull/6881)). Fixes vector-im/element-web#18975 and vector-im/element-web#18975.
 * Fix timeline autoscroll with non-standard DPI settings. ([\#6880](https://github.com/matrix-org/matrix-react-sdk/pull/6880)). Fixes vector-im/element-web#18984 and vector-im/element-web#18984.
 * Pluck out JoinRuleSettings styles so they apply in space settings too ([\#6879](https://github.com/matrix-org/matrix-react-sdk/pull/6879)). Fixes vector-im/element-web#19164 and vector-im/element-web#19164.
 * Null guard around the matrixClient in SpaceStore ([\#6874](https://github.com/matrix-org/matrix-react-sdk/pull/6874)).
 * Fix issue (https ([\#6871](https://github.com/matrix-org/matrix-react-sdk/pull/6871)). Fixes vector-im/element-web#19138 and vector-im/element-web#19138. Contributed by [psrpinto](https://github.com/psrpinto).
 * Fix pills being cut off in message bubble layout ([\#6865](https://github.com/matrix-org/matrix-react-sdk/pull/6865)). Fixes vector-im/element-web#18627 and vector-im/element-web#18627. Contributed by [robintown](https://github.com/robintown).
 * Fix space admin check false positive on multiple admins ([\#6824](https://github.com/matrix-org/matrix-react-sdk/pull/6824)).
 * Fix the User View ([\#6860](https://github.com/matrix-org/matrix-react-sdk/pull/6860)). Fixes vector-im/element-web#19158 and vector-im/element-web#19158.
 * Fix spacing for message composer buttons ([\#6852](https://github.com/matrix-org/matrix-react-sdk/pull/6852)). Fixes vector-im/element-web#18999 and vector-im/element-web#18999.
 * Always show root event of a thread in room's timeline ([\#6842](https://github.com/matrix-org/matrix-react-sdk/pull/6842)). Fixes vector-im/element-web#19016 and vector-im/element-web#19016.

Changes in [1.9.0](https://github.com/vector-im/element-desktop/releases/tag/v1.9.0) (2021-09-27)
=================================================================================================

## ✨ Features
 * Fix space keyboard shortcuts conflicting with native zoom shortcuts ([\#19037](https://github.com/vector-im/element-web/pull/19037)). Fixes vector-im/element-web#18481 and undefined/element-web#18481.
 * Say Joining space instead of Joining room where we know its a space ([\#6818](https://github.com/matrix-org/matrix-react-sdk/pull/6818)). Fixes vector-im/element-web#19064 and vector-im/element-web#19064.
 * Add warning that some spaces may not be relinked to the newly upgraded room ([\#6805](https://github.com/matrix-org/matrix-react-sdk/pull/6805)). Fixes vector-im/element-web#18858 and vector-im/element-web#18858.
 * Delabs Spaces, iterate some copy and move communities/space toggle to preferences ([\#6594](https://github.com/matrix-org/matrix-react-sdk/pull/6594)). Fixes vector-im/element-web#18088, vector-im/element-web#18524 vector-im/element-web#18088 and vector-im/element-web#18088.
 * Show "Message" in the user info panel instead of "Start chat" ([\#6319](https://github.com/matrix-org/matrix-react-sdk/pull/6319)). Fixes vector-im/element-web#17877 and vector-im/element-web#17877. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix space keyboard shortcuts conflicting with native zoom shortcuts ([\#6804](https://github.com/matrix-org/matrix-react-sdk/pull/6804)).
 * Replace plain text emoji at the end of a line ([\#6784](https://github.com/matrix-org/matrix-react-sdk/pull/6784)). Fixes vector-im/element-web#18833 and vector-im/element-web#18833. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Simplify Space Panel layout and fix some edge cases ([\#6800](https://github.com/matrix-org/matrix-react-sdk/pull/6800)). Fixes vector-im/element-web#18694 and vector-im/element-web#18694.
 * Show unsent message warning on Space Panel buttons ([\#6778](https://github.com/matrix-org/matrix-react-sdk/pull/6778)). Fixes vector-im/element-web#18891 and vector-im/element-web#18891.
 * Hide mute/unmute button in UserInfo for Spaces as it makes no sense ([\#6790](https://github.com/matrix-org/matrix-react-sdk/pull/6790)). Fixes vector-im/element-web#19007 and vector-im/element-web#19007.
 * Fix automatic field population in space create menu not validating ([\#6792](https://github.com/matrix-org/matrix-react-sdk/pull/6792)). Fixes vector-im/element-web#19005 and vector-im/element-web#19005.
 * Optimize input label transition on focus ([\#6783](https://github.com/matrix-org/matrix-react-sdk/pull/6783)). Fixes vector-im/element-web#12876 and vector-im/element-web#12876. Contributed by [MadLittleMods](https://github.com/MadLittleMods).
 * Adapt and re-use the RolesRoomSettingsTab for Spaces ([\#6779](https://github.com/matrix-org/matrix-react-sdk/pull/6779)). Fixes vector-im/element-web#18908 vector-im/element-web#18909 and vector-im/element-web#18908.
 * Deduplicate join rule management between rooms and spaces ([\#6724](https://github.com/matrix-org/matrix-react-sdk/pull/6724)). Fixes vector-im/element-web#18798 and vector-im/element-web#18798.
 * Add config option to turn on in-room event sending timing metrics ([\#6766](https://github.com/matrix-org/matrix-react-sdk/pull/6766)).
 * Improve the upgrade for restricted user experience ([\#6764](https://github.com/matrix-org/matrix-react-sdk/pull/6764)). Fixes vector-im/element-web#18677 and vector-im/element-web#18677.
 * Improve tooltips on space quick actions and explore button ([\#6760](https://github.com/matrix-org/matrix-react-sdk/pull/6760)). Fixes vector-im/element-web#18528 and vector-im/element-web#18528.
 * Make space members and user info behave more expectedly ([\#6765](https://github.com/matrix-org/matrix-react-sdk/pull/6765)). Fixes vector-im/element-web#17018 and vector-im/element-web#17018.
 * hide no-op m.room.encryption events and better word param changes ([\#6747](https://github.com/matrix-org/matrix-react-sdk/pull/6747)). Fixes vector-im/element-web#18597 and vector-im/element-web#18597.
 * Respect m.space.parent relations if they hold valid permissions ([\#6746](https://github.com/matrix-org/matrix-react-sdk/pull/6746)). Fixes vector-im/element-web#10935 and vector-im/element-web#10935.
 * Space panel accessibility improvements ([\#6744](https://github.com/matrix-org/matrix-react-sdk/pull/6744)). Fixes vector-im/element-web#18892 and vector-im/element-web#18892.

## 🐛 Bug Fixes
 * Fix spacing for message composer buttons ([\#6854](https://github.com/matrix-org/matrix-react-sdk/pull/6854)).
 * Fix accessing field on oobData which may be undefined ([\#6830](https://github.com/matrix-org/matrix-react-sdk/pull/6830)). Fixes vector-im/element-web#19085 and vector-im/element-web#19085.
 * Fix reactions aria-label not being a string and thus being read as [Object object] ([\#6828](https://github.com/matrix-org/matrix-react-sdk/pull/6828)).
 * Fix missing null guard in space hierarchy pagination ([\#6821](https://github.com/matrix-org/matrix-react-sdk/pull/6821)). Fixes matrix-org/element-web-rageshakes#6299 and matrix-org/element-web-rageshakes#6299.
 * Fix checks to show prompt to start new chats ([\#6812](https://github.com/matrix-org/matrix-react-sdk/pull/6812)).
 * Fix room list scroll jumps ([\#6777](https://github.com/matrix-org/matrix-react-sdk/pull/6777)). Fixes vector-im/element-web#17460 vector-im/element-web#18440 and vector-im/element-web#17460. Contributed by [robintown](https://github.com/robintown).
 * Fix various message bubble alignment issues ([\#6785](https://github.com/matrix-org/matrix-react-sdk/pull/6785)). Fixes vector-im/element-web#18293, vector-im/element-web#18294 vector-im/element-web#18305 and vector-im/element-web#18293. Contributed by [robintown](https://github.com/robintown).
 * Make message bubble font size consistent ([\#6795](https://github.com/matrix-org/matrix-react-sdk/pull/6795)). Contributed by [robintown](https://github.com/robintown).
 * Fix edge cases around joining new room which does not belong to active space ([\#6797](https://github.com/matrix-org/matrix-react-sdk/pull/6797)). Fixes vector-im/element-web#19025 and vector-im/element-web#19025.
 * Fix edge case space issues around creation and initial view ([\#6798](https://github.com/matrix-org/matrix-react-sdk/pull/6798)). Fixes vector-im/element-web#19023 and vector-im/element-web#19023.
 * Stop spinner on space preview if the join fails ([\#6803](https://github.com/matrix-org/matrix-react-sdk/pull/6803)). Fixes vector-im/element-web#19034 and vector-im/element-web#19034.
 * Fix emoji picker and stickerpicker not appearing correctly when opened ([\#6793](https://github.com/matrix-org/matrix-react-sdk/pull/6793)). Fixes vector-im/element-web#19012 and vector-im/element-web#19012. Contributed by [Palid](https://github.com/Palid).
 * Fix autocomplete not having y-scroll ([\#6794](https://github.com/matrix-org/matrix-react-sdk/pull/6794)). Fixes vector-im/element-web#18997 and vector-im/element-web#18997. Contributed by [Palid](https://github.com/Palid).
 * Fix broken edge case with public space creation with no alias ([\#6791](https://github.com/matrix-org/matrix-react-sdk/pull/6791)). Fixes vector-im/element-web#19003 and vector-im/element-web#19003.
 * Redirect from /#/welcome to /#/home if already logged in ([\#6786](https://github.com/matrix-org/matrix-react-sdk/pull/6786)). Fixes vector-im/element-web#18990 and vector-im/element-web#18990. Contributed by [aaronraimist](https://github.com/aaronraimist).
 * Fix build issues from two conflicting PRs landing without merge conflict ([\#6780](https://github.com/matrix-org/matrix-react-sdk/pull/6780)).
 * Render guest settings only in public rooms/spaces ([\#6693](https://github.com/matrix-org/matrix-react-sdk/pull/6693)). Fixes vector-im/element-web#18776 and vector-im/element-web#18776. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix message bubble corners being wrong in the presence of hidden events ([\#6776](https://github.com/matrix-org/matrix-react-sdk/pull/6776)). Fixes vector-im/element-web#18124 and vector-im/element-web#18124. Contributed by [robintown](https://github.com/robintown).
 * Debounce read marker update on scroll ([\#6771](https://github.com/matrix-org/matrix-react-sdk/pull/6771)). Fixes vector-im/element-web#18961 and vector-im/element-web#18961.
 * Use cursor:pointer on space panel buttons ([\#6770](https://github.com/matrix-org/matrix-react-sdk/pull/6770)). Fixes vector-im/element-web#18951 and vector-im/element-web#18951.
 * Fix regressed tab view buttons in space update toast ([\#6761](https://github.com/matrix-org/matrix-react-sdk/pull/6761)). Fixes vector-im/element-web#18781 and vector-im/element-web#18781.

Changes in [1.8.5](https://github.com/vector-im/element-desktop/releases/tag/v1.8.5) (2021-09-14)
=================================================================================================

## ✨ Features
 * Add bubble highlight styling ([\#6582](https://github.com/matrix-org/matrix-react-sdk/pull/6582)). Fixes #18295 and #18295. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Create narrow mode for Composer ([\#6682](https://github.com/matrix-org/matrix-react-sdk/pull/6682)). Fixes #18533 and #18533.
 * Prefer matrix.to alias links over room id in spaces & share ([\#6745](https://github.com/matrix-org/matrix-react-sdk/pull/6745)). Fixes #18796 and #18796.
 * Stop automatic playback of voice messages if a non-voice message is encountered ([\#6728](https://github.com/matrix-org/matrix-react-sdk/pull/6728)). Fixes #18850 and #18850.
 * Show call length during a call ([\#6700](https://github.com/matrix-org/matrix-react-sdk/pull/6700)). Fixes #18566 and #18566. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Serialize and retry mass-leave when leaving space ([\#6737](https://github.com/matrix-org/matrix-react-sdk/pull/6737)). Fixes #18789 and #18789.
 * Improve form handling in and around space creation ([\#6739](https://github.com/matrix-org/matrix-react-sdk/pull/6739)). Fixes #18775 and #18775.
 * Split autoplay GIFs and videos into different settings ([\#6726](https://github.com/matrix-org/matrix-react-sdk/pull/6726)). Fixes #5771 and #5771. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Add autoplay for voice messages ([\#6710](https://github.com/matrix-org/matrix-react-sdk/pull/6710)). Fixes #18804, #18715, #18714 #17961 and #18804.
 * Allow to use basic html to format invite messages ([\#6703](https://github.com/matrix-org/matrix-react-sdk/pull/6703)). Fixes #15738 and #15738. Contributed by [skolmer](https://github.com/skolmer).
 * Allow widgets, when eligible, to interact with more rooms as per MSC2762 ([\#6684](https://github.com/matrix-org/matrix-react-sdk/pull/6684)).
 * Remove arbitrary limits from send/receive events for widgets ([\#6719](https://github.com/matrix-org/matrix-react-sdk/pull/6719)). Fixes #17994 and #17994.
 * Reload suggested rooms if we see the state change down /sync ([\#6715](https://github.com/matrix-org/matrix-react-sdk/pull/6715)). Fixes #18761 and #18761.
 * When creating private spaces, make the initial rooms restricted if supported ([\#6721](https://github.com/matrix-org/matrix-react-sdk/pull/6721)). Fixes #18722 and #18722.
 * Threading exploration work ([\#6658](https://github.com/matrix-org/matrix-react-sdk/pull/6658)). Fixes #18532 and #18532.
 * Default to `Don't leave any` when leaving a space ([\#6697](https://github.com/matrix-org/matrix-react-sdk/pull/6697)). Fixes #18592 and #18592. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Special case redaction event sending from widgets per MSC2762 ([\#6686](https://github.com/matrix-org/matrix-react-sdk/pull/6686)). Fixes #18573 and #18573.
 * Add active speaker indicators ([\#6639](https://github.com/matrix-org/matrix-react-sdk/pull/6639)). Fixes #17627 and #17627. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Increase general app performance by optimizing layers ([\#6644](https://github.com/matrix-org/matrix-react-sdk/pull/6644)). Fixes #18730 and #18730. Contributed by [Palid](https://github.com/Palid).

## 🐛 Bug Fixes
 * Fix autocomplete not having y-scroll ([\#6802](https://github.com/matrix-org/matrix-react-sdk/pull/6802)).
 * Fix emoji picker and stickerpicker not appearing correctly when opened ([\#6801](https://github.com/matrix-org/matrix-react-sdk/pull/6801)).
 * Debounce read marker update on scroll ([\#6774](https://github.com/matrix-org/matrix-react-sdk/pull/6774)).
 * Fix Space creation wizard go to my first room button behaviour ([\#6748](https://github.com/matrix-org/matrix-react-sdk/pull/6748)). Fixes #18764 and #18764.
 * Fix scroll being stuck at bottom ([\#6751](https://github.com/matrix-org/matrix-react-sdk/pull/6751)). Fixes #18903 and #18903.
 * Fix widgets not remembering identity verification when asked to. ([\#6742](https://github.com/matrix-org/matrix-react-sdk/pull/6742)). Fixes #15631 and #15631.
 * Add missing pluralisation i18n strings for Spaces ([\#6738](https://github.com/matrix-org/matrix-react-sdk/pull/6738)). Fixes #18780 and #18780.
 * Make ForgotPassword UX slightly more user friendly ([\#6636](https://github.com/matrix-org/matrix-react-sdk/pull/6636)). Fixes #11531 and #11531. Contributed by [Palid](https://github.com/Palid).
 * Don't context switch room on SpaceStore ready as it can break permalinks ([\#6730](https://github.com/matrix-org/matrix-react-sdk/pull/6730)). Fixes #17974 and #17974.
 * Fix explore rooms button not working during space creation wizard ([\#6729](https://github.com/matrix-org/matrix-react-sdk/pull/6729)). Fixes #18762 and #18762.
 * Fix bug where one party's media would sometimes not be shown ([\#6731](https://github.com/matrix-org/matrix-react-sdk/pull/6731)).
 * Only make the initial space rooms suggested by default ([\#6714](https://github.com/matrix-org/matrix-react-sdk/pull/6714)). Fixes #18760 and #18760.
 * Replace fake username in EventTilePreview with a proper loading state ([\#6702](https://github.com/matrix-org/matrix-react-sdk/pull/6702)). Fixes #15897 and #15897. Contributed by [skolmer](https://github.com/skolmer).
 * Don't send prehistorical events to widgets during decryption at startup ([\#6695](https://github.com/matrix-org/matrix-react-sdk/pull/6695)). Fixes #18060 and #18060.
 * When creating subspaces properly set restricted join rule ([\#6725](https://github.com/matrix-org/matrix-react-sdk/pull/6725)). Fixes #18797 and #18797.
 * Fix the Image View not openning for some pinned messages ([\#6723](https://github.com/matrix-org/matrix-react-sdk/pull/6723)). Fixes #18422 and #18422. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Show autocomplete sections vertically ([\#6722](https://github.com/matrix-org/matrix-react-sdk/pull/6722)). Fixes #18860 and #18860. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix EmojiPicker filtering to lower case emojibase data strings ([\#6717](https://github.com/matrix-org/matrix-react-sdk/pull/6717)). Fixes #18686 and #18686.
 * Clear currentRoomId when viewing home page, fixing document title ([\#6716](https://github.com/matrix-org/matrix-react-sdk/pull/6716)). Fixes #18668 and #18668.
 * Fix membership updates to Spaces not applying in real-time ([\#6713](https://github.com/matrix-org/matrix-react-sdk/pull/6713)). Fixes #18737 and #18737.
 * Don't show a double stacked invite modals when inviting to Spaces ([\#6698](https://github.com/matrix-org/matrix-react-sdk/pull/6698)). Fixes #18745 and #18745. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Remove non-functional DuckDuckGo Autocomplete Provider ([\#6712](https://github.com/matrix-org/matrix-react-sdk/pull/6712)). Fixes #18778 and #18778.
 * Filter members on `MemberList` load ([\#6708](https://github.com/matrix-org/matrix-react-sdk/pull/6708)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix improper voice messages being produced in Firefox and sometimes other browsers. ([\#6696](https://github.com/matrix-org/matrix-react-sdk/pull/6696)). Fixes #18587 and #18587.
 * Fix client forgetting which capabilities a widget was approved for ([\#6685](https://github.com/matrix-org/matrix-react-sdk/pull/6685)). Fixes #18786 and #18786.

Changes in [1.8.4](https://github.com/vector-im/element-desktop/releases/tag/v1.8.4) (2021-09-13)
=================================================================================================

## 🔒 SECURITY FIXES
 * Fix a security issue with message key sharing. See https://matrix.org/blog/2021/09/13/vulnerability-disclosure-key-sharing
   for details.

Changes in [1.8.2](https://github.com/vector-im/element-desktop/releases/tag/v1.8.2) (2021-08-31)
=================================================================================================

## ✨ Features
 * Enable Pipewire support for Wayland screen-sharing ([\#256](https://github.com/vector-im/element-desktop/pull/256)). Fixes vector-im/element-web#18607 and vector-im/element-web#18607. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Documentation for sentry config ([\#18608](https://github.com/vector-im/element-web/pull/18608)). Contributed by [novocaine](https://github.com/novocaine).
 * [Release]Increase general app performance by optimizing layers ([\#6672](https://github.com/matrix-org/matrix-react-sdk/pull/6672)). Fixes vector-im/element-web#18730 and vector-im/element-web#18730. Contributed by [Palid](https://github.com/Palid).
 * Add a warning on E2EE rooms if you try to make them public ([\#5698](https://github.com/matrix-org/matrix-react-sdk/pull/5698)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Allow pagination of the space hierarchy and use new APIs ([\#6507](https://github.com/matrix-org/matrix-react-sdk/pull/6507)). Fixes vector-im/element-web#18089 and vector-im/element-web#18427.
 * Improve emoji in composer ([\#6650](https://github.com/matrix-org/matrix-react-sdk/pull/6650)). Fixes vector-im/element-web#18593 and vector-im/element-web#18593. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Allow playback of replied-to voice message ([\#6629](https://github.com/matrix-org/matrix-react-sdk/pull/6629)). Fixes vector-im/element-web#18599 and vector-im/element-web#18599. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Format autocomplete suggestions vertically ([\#6620](https://github.com/matrix-org/matrix-react-sdk/pull/6620)). Fixes vector-im/element-web#17574 and vector-im/element-web#17574. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Remember last `MemberList` search query per-room ([\#6640](https://github.com/matrix-org/matrix-react-sdk/pull/6640)). Fixes vector-im/element-web#18613 and vector-im/element-web#18613. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Sentry rageshakes ([\#6597](https://github.com/matrix-org/matrix-react-sdk/pull/6597)). Fixes vector-im/element-web#11111 and vector-im/element-web#11111. Contributed by [novocaine](https://github.com/novocaine).
 * Autocomplete has been updated to match modern accessibility standards. Navigate via up/down arrows rather than Tab. Enter or Tab to confirm a suggestion. This should be familiar to Slack & Discord users. You can now use Tab to navigate around the application and do more without touching your mouse. No more accidentally sending half of people's names because the completion didn't fire on Enter! ([\#5659](https://github.com/matrix-org/matrix-react-sdk/pull/5659)). Fixes vector-im/element-web#4872, vector-im/element-web#11071, vector-im/element-web#17171, vector-im/element-web#15646 vector-im/element-web#4872 and vector-im/element-web#4872.
 * Add new call tile states ([\#6610](https://github.com/matrix-org/matrix-react-sdk/pull/6610)). Fixes vector-im/element-web#18521 and vector-im/element-web#18521. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Left align call tiles ([\#6609](https://github.com/matrix-org/matrix-react-sdk/pull/6609)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Make loading encrypted images look snappier ([\#6590](https://github.com/matrix-org/matrix-react-sdk/pull/6590)). Fixes vector-im/element-web#17878 and vector-im/element-web#17862. Contributed by [Palid](https://github.com/Palid).
 * Offer a way to create a space based on existing community ([\#6543](https://github.com/matrix-org/matrix-react-sdk/pull/6543)). Fixes vector-im/element-web#18092.
 * Accessibility improvements in and around Spaces ([\#6569](https://github.com/matrix-org/matrix-react-sdk/pull/6569)). Fixes vector-im/element-web#18094 and vector-im/element-web#18094.

## 🐛 Bug Fixes
 * [Release] Fix commit edit history ([\#6690](https://github.com/matrix-org/matrix-react-sdk/pull/6690)). Fixes vector-im/element-web#18742 and vector-im/element-web#18742. Contributed by [Palid](https://github.com/Palid).
 * Fix images not rendering when sent from other clients. ([\#6661](https://github.com/matrix-org/matrix-react-sdk/pull/6661)). Fixes vector-im/element-web#18702 and vector-im/element-web#18702.
 * Fix autocomplete scrollbar and make the autocomplete a little smaller ([\#6655](https://github.com/matrix-org/matrix-react-sdk/pull/6655)). Fixes vector-im/element-web#18682 and vector-im/element-web#18682. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix replies on the bubble layout ([\#6451](https://github.com/matrix-org/matrix-react-sdk/pull/6451)). Fixes vector-im/element-web#18184. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Show "Enable encryption in settings" only when the user can do that ([\#6646](https://github.com/matrix-org/matrix-react-sdk/pull/6646)). Fixes vector-im/element-web#18646 and vector-im/element-web#18646. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix cross signing setup from settings screen ([\#6633](https://github.com/matrix-org/matrix-react-sdk/pull/6633)). Fixes vector-im/element-web#17761 and vector-im/element-web#17761.
 * Fix call tiles on the bubble layout ([\#6647](https://github.com/matrix-org/matrix-react-sdk/pull/6647)). Fixes vector-im/element-web#18648 and vector-im/element-web#18648. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix error on accessing encrypted media without encryption keys ([\#6625](https://github.com/matrix-org/matrix-react-sdk/pull/6625)). Contributed by [Palid](https://github.com/Palid).
 * Fix jitsi widget sometimes being permanently stuck in the bottom-right corner ([\#6632](https://github.com/matrix-org/matrix-react-sdk/pull/6632)). Fixes vector-im/element-web#17226 and vector-im/element-web#17226. Contributed by [Palid](https://github.com/Palid).
 * Fix FilePanel pagination in E2EE rooms ([\#6630](https://github.com/matrix-org/matrix-react-sdk/pull/6630)). Fixes vector-im/element-web#18415 and vector-im/element-web#18415. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix call tile buttons ([\#6624](https://github.com/matrix-org/matrix-react-sdk/pull/6624)). Fixes vector-im/element-web#18565 and vector-im/element-web#18565. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix vertical call tile spacing issues ([\#6621](https://github.com/matrix-org/matrix-react-sdk/pull/6621)). Fixes vector-im/element-web#18558 and vector-im/element-web#18558. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix long display names in call tiles ([\#6618](https://github.com/matrix-org/matrix-react-sdk/pull/6618)). Fixes vector-im/element-web#18562 and vector-im/element-web#18562. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Avoid access token overflow ([\#6616](https://github.com/matrix-org/matrix-react-sdk/pull/6616)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Properly handle media errors  ([\#6615](https://github.com/matrix-org/matrix-react-sdk/pull/6615)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix glare related regressions ([\#6614](https://github.com/matrix-org/matrix-react-sdk/pull/6614)). Fixes vector-im/element-web#18538 and vector-im/element-web#18538. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix long display names in call toasts ([\#6617](https://github.com/matrix-org/matrix-react-sdk/pull/6617)). Fixes vector-im/element-web#18557 and vector-im/element-web#18557. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix PiP of held calls ([\#6611](https://github.com/matrix-org/matrix-react-sdk/pull/6611)). Fixes vector-im/element-web#18539 and vector-im/element-web#18539. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix call tile behaviour on narrow layouts ([\#6556](https://github.com/matrix-org/matrix-react-sdk/pull/6556)). Fixes vector-im/element-web#18398. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix video call persisting when widget removed ([\#6608](https://github.com/matrix-org/matrix-react-sdk/pull/6608)). Fixes vector-im/element-web#15703 and vector-im/element-web#15703.
 * Fix toast colors ([\#6606](https://github.com/matrix-org/matrix-react-sdk/pull/6606)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Remove tiny scrollbar dot from code blocks ([\#6596](https://github.com/matrix-org/matrix-react-sdk/pull/6596)). Fixes vector-im/element-web#18474. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Improve handling of pills in the composer ([\#6353](https://github.com/matrix-org/matrix-react-sdk/pull/6353)). Fixes vector-im/element-web#10134 vector-im/element-web#10896 and vector-im/element-web#15037. Contributed by [SimonBrandner](https://github.com/SimonBrandner).

Changes in [1.8.1](https://github.com/vector-im/element-desktop/releases/tag/v1.8.1) (2021-08-17)
=================================================================================================

## 🐛 Bug Fixes
 * Fix multiple VoIP regressions ([matrix-org/matrix-js-sdk#1860](https://github.com/matrix-org/matrix-js-sdk/pull/1860)).

Changes in [1.8.0](https://github.com/vector-im/element-desktop/releases/tag/v1.8.0) (2021-08-16)
=================================================================================================

## ✨ Features
 * Show how long a call was on call tiles ([\#6570](https://github.com/matrix-org/matrix-react-sdk/pull/6570)). Fixes vector-im/element-web#18405. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Add regional indicators to emoji picker ([\#6490](https://github.com/matrix-org/matrix-react-sdk/pull/6490)). Fixes vector-im/element-web#14963. Contributed by [robintown](https://github.com/robintown).
 * Make call control buttons accessible to screen reader users ([\#6181](https://github.com/matrix-org/matrix-react-sdk/pull/6181)). Fixes vector-im/element-web#18358. Contributed by [pvagner](https://github.com/pvagner).
 * Skip sending a thumbnail if it is not a sufficient saving over the original ([\#6559](https://github.com/matrix-org/matrix-react-sdk/pull/6559)). Fixes vector-im/element-web#17906.
 * Increase PiP snapping speed ([\#6539](https://github.com/matrix-org/matrix-react-sdk/pull/6539)). Fixes vector-im/element-web#18371. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Improve and move the incoming call toast ([\#6470](https://github.com/matrix-org/matrix-react-sdk/pull/6470)). Fixes vector-im/element-web#17912. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Allow all of the URL schemes that Firefox allows ([\#6457](https://github.com/matrix-org/matrix-react-sdk/pull/6457)). Contributed by [aaronraimist](https://github.com/aaronraimist).
 * Improve bubble layout colors ([\#6452](https://github.com/matrix-org/matrix-react-sdk/pull/6452)). Fixes vector-im/element-web#18081. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Spaces let users switch between Home and All Rooms behaviours ([\#6497](https://github.com/matrix-org/matrix-react-sdk/pull/6497)). Fixes vector-im/element-web#18093.
 * Support for MSC2285 (hidden read receipts) ([\#6390](https://github.com/matrix-org/matrix-react-sdk/pull/6390)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Group pinned message events with MELS ([\#6349](https://github.com/matrix-org/matrix-react-sdk/pull/6349)). Fixes vector-im/element-web#17938. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Make version copiable ([\#6227](https://github.com/matrix-org/matrix-react-sdk/pull/6227)). Fixes vector-im/element-web#17603 and vector-im/element-web#18329. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Improve voice messages uploading state ([\#6530](https://github.com/matrix-org/matrix-react-sdk/pull/6530)). Fixes vector-im/element-web#18226 and vector-im/element-web#18224.
 * Add surround with feature ([\#5510](https://github.com/matrix-org/matrix-react-sdk/pull/5510)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Improve call event tile wording ([\#6545](https://github.com/matrix-org/matrix-react-sdk/pull/6545)). Fixes vector-im/element-web#18376. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Show an avatar/a turned off microphone icon for muted users ([\#6486](https://github.com/matrix-org/matrix-react-sdk/pull/6486)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Prompt user to leave rooms/subspaces in a space when leaving space ([\#6424](https://github.com/matrix-org/matrix-react-sdk/pull/6424)). Fixes vector-im/element-web#18071.
 * Add customisation point to override widget variables ([\#6455](https://github.com/matrix-org/matrix-react-sdk/pull/6455)). Fixes vector-im/element-web#18035.
 * Add support for screen sharing in 1:1 calls ([\#5992](https://github.com/matrix-org/matrix-react-sdk/pull/5992)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).

## 🐛 Bug Fixes
 * Dismiss electron download toast when clicking Open ([\#18267](https://github.com/vector-im/element-web/pull/18267)). Fixes vector-im/element-web#18266.
 * [Release] Fix glare related regressions ([\#6622](https://github.com/matrix-org/matrix-react-sdk/pull/6622)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * [Release] Fix PiP of held calls ([\#6612](https://github.com/matrix-org/matrix-react-sdk/pull/6612)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * [Release] Fix toast colors ([\#6607](https://github.com/matrix-org/matrix-react-sdk/pull/6607)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix [object Object] in Widget Permissions ([\#6560](https://github.com/matrix-org/matrix-react-sdk/pull/6560)). Fixes vector-im/element-web#18384. Contributed by [Palid](https://github.com/Palid).
 * Fix right margin for events on IRC layout ([\#6542](https://github.com/matrix-org/matrix-react-sdk/pull/6542)). Fixes vector-im/element-web#18354.
 * Mirror only usermedia feeds ([\#6512](https://github.com/matrix-org/matrix-react-sdk/pull/6512)). Fixes vector-im/element-web#5633. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix LogoutDialog warning + TypeScript migration ([\#6533](https://github.com/matrix-org/matrix-react-sdk/pull/6533)).
 * Fix the wrong font being used in the room topic field ([\#6527](https://github.com/matrix-org/matrix-react-sdk/pull/6527)). Fixes vector-im/element-web#18339. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix inconsistent styling for links on hover ([\#6513](https://github.com/matrix-org/matrix-react-sdk/pull/6513)). Contributed by [janogarcia](https://github.com/janogarcia).
 * Fix incorrect height for encoded placeholder images ([\#6514](https://github.com/matrix-org/matrix-react-sdk/pull/6514)). Contributed by [Palid](https://github.com/Palid).
 * Fix call events layout for message bubble ([\#6465](https://github.com/matrix-org/matrix-react-sdk/pull/6465)). Fixes vector-im/element-web#18144.
 * Improve subspaces and some utilities around room/space creation ([\#6458](https://github.com/matrix-org/matrix-react-sdk/pull/6458)). Fixes vector-im/element-web#18090 vector-im/element-web#18091 and vector-im/element-web#17256.
 * Restore pointer cursor for SenderProfile in message bubbles ([\#6501](https://github.com/matrix-org/matrix-react-sdk/pull/6501)). Fixes vector-im/element-web#18249.
 * Fix issues with the Call View ([\#6472](https://github.com/matrix-org/matrix-react-sdk/pull/6472)). Fixes vector-im/element-web#18221. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Align event list summary read receipts when using message bubbles ([\#6500](https://github.com/matrix-org/matrix-react-sdk/pull/6500)). Fixes vector-im/element-web#18143.
 * Better positioning for unbubbled events in timeline ([\#6477](https://github.com/matrix-org/matrix-react-sdk/pull/6477)). Fixes vector-im/element-web#18132.
 * Realign reactions row with messages in modern layout ([\#6491](https://github.com/matrix-org/matrix-react-sdk/pull/6491)). Fixes vector-im/element-web#18118. Contributed by [robintown](https://github.com/robintown).
 * Fix CreateRoomDialog exploding when making public room outside of a space ([\#6492](https://github.com/matrix-org/matrix-react-sdk/pull/6492)). Fixes vector-im/element-web#18275.
 * Fix call crashing because `element` was undefined ([\#6488](https://github.com/matrix-org/matrix-react-sdk/pull/6488)). Fixes vector-im/element-web#18270. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Upscale thumbnails to the container size ([\#6589](https://github.com/matrix-org/matrix-react-sdk/pull/6589)). Fixes vector-im/element-web#18307.
 * Fix create room dialog in spaces no longer adding to the space ([\#6587](https://github.com/matrix-org/matrix-react-sdk/pull/6587)). Fixes vector-im/element-web#18465.
 * Don't show a modal on call reject/user hangup ([\#6580](https://github.com/matrix-org/matrix-react-sdk/pull/6580)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fade Call View Buttons after `componentDidMount` ([\#6581](https://github.com/matrix-org/matrix-react-sdk/pull/6581)). Fixes vector-im/element-web#18439. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix missing expand button on codeblocks ([\#6565](https://github.com/matrix-org/matrix-react-sdk/pull/6565)). Fixes vector-im/element-web#18388. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * allow customizing the bubble layout colors ([\#6568](https://github.com/matrix-org/matrix-react-sdk/pull/6568)). Fixes vector-im/element-web#18408. Contributed by [benneti](https://github.com/benneti).
 * Don't flash "Missed call" when accepting a call ([\#6567](https://github.com/matrix-org/matrix-react-sdk/pull/6567)). Fixes vector-im/element-web#18404. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix clicking whitespaces on replies ([\#6571](https://github.com/matrix-org/matrix-react-sdk/pull/6571)). Fixes vector-im/element-web#18327. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix disabled state for voice messages + send button tooltip ([\#6562](https://github.com/matrix-org/matrix-react-sdk/pull/6562)). Fixes vector-im/element-web#18413.
 * Fix voice feed being cut-off ([\#6550](https://github.com/matrix-org/matrix-react-sdk/pull/6550)). Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix sizing issues of the screen picker ([\#6498](https://github.com/matrix-org/matrix-react-sdk/pull/6498)). Fixes vector-im/element-web#18281. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Stop voice messages that are playing when starting a recording ([\#6563](https://github.com/matrix-org/matrix-react-sdk/pull/6563)). Fixes vector-im/element-web#18410.
 * Properly set style attribute on shared usercontent iframe ([\#6561](https://github.com/matrix-org/matrix-react-sdk/pull/6561)). Fixes vector-im/element-web#18414.
 * Null guard space inviter to prevent the app exploding ([\#6558](https://github.com/matrix-org/matrix-react-sdk/pull/6558)).
 * Make the ringing sound mutable/disablable ([\#6534](https://github.com/matrix-org/matrix-react-sdk/pull/6534)). Fixes vector-im/element-web#15591. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix wrong cursor being used in PiP ([\#6551](https://github.com/matrix-org/matrix-react-sdk/pull/6551)). Fixes vector-im/element-web#18383. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Re-pin Jitsi if the widget already exists ([\#6226](https://github.com/matrix-org/matrix-react-sdk/pull/6226)). Fixes vector-im/element-web#17679. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix broken call notification regression ([\#6526](https://github.com/matrix-org/matrix-react-sdk/pull/6526)). Fixes vector-im/element-web#18335. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * createRoom, only send join rule event if we have a join rule to put in it ([\#6516](https://github.com/matrix-org/matrix-react-sdk/pull/6516)). Fixes vector-im/element-web#18301.
 * Fix clicking pills inside replies ([\#6508](https://github.com/matrix-org/matrix-react-sdk/pull/6508)). Fixes vector-im/element-web#18283. Contributed by [SimonBrandner](https://github.com/SimonBrandner).
 * Fix grecaptcha regression ([\#6503](https://github.com/matrix-org/matrix-react-sdk/pull/6503)). Fixes vector-im/element-web#18284. Contributed by [Palid](https://github.com/Palid).

Changes in [1.7.34](https://github.com/vector-im/element-desktop/releases/tag/v1.7.34) (2021-08-02)
===================================================================================================

## 🔒 SECURITY FIXES
 * Sanitize untrusted variables from message previews before translation
   Fixes vector-im/element-web#18314

## ✨ Features
 * Fix editing of `<sub>` & `<sup`> & `<u>`
   [\#6469](https://github.com/matrix-org/matrix-react-sdk/pull/6469)
   Fixes vector-im/element-web#18211
 * Zoom images in lightbox to where the cursor points
   [\#6418](https://github.com/matrix-org/matrix-react-sdk/pull/6418)
   Fixes vector-im/element-web#17870
 * Avoid hitting the settings store from TextForEvent
   [\#6205](https://github.com/matrix-org/matrix-react-sdk/pull/6205)
   Fixes vector-im/element-web#17650
 * Initial MSC3083 + MSC3244 support
   [\#6212](https://github.com/matrix-org/matrix-react-sdk/pull/6212)
   Fixes vector-im/element-web#17686 and vector-im/element-web#17661
 * Navigate to the first room with notifications when clicked on space notification dot
   [\#5974](https://github.com/matrix-org/matrix-react-sdk/pull/5974)
 * Add matrix: to the list of permitted URL schemes
   [\#6388](https://github.com/matrix-org/matrix-react-sdk/pull/6388)
 * Add "Copy Link" to room context menu
   [\#6374](https://github.com/matrix-org/matrix-react-sdk/pull/6374)
 * 💭 Message bubble layout
   [\#6291](https://github.com/matrix-org/matrix-react-sdk/pull/6291)
   Fixes vector-im/element-web#4635, vector-im/element-web#17773 vector-im/element-web#16220 and vector-im/element-web#7687
 * Play only one audio file at a time
   [\#6417](https://github.com/matrix-org/matrix-react-sdk/pull/6417)
   Fixes vector-im/element-web#17439
 * Move download button for media to the action bar
   [\#6386](https://github.com/matrix-org/matrix-react-sdk/pull/6386)
   Fixes vector-im/element-web#17943
 * Improved display of one-to-one call history with summary boxes for each call
   [\#6121](https://github.com/matrix-org/matrix-react-sdk/pull/6121)
   Fixes vector-im/element-web#16409
 * Notification settings UI refresh
   [\#6352](https://github.com/matrix-org/matrix-react-sdk/pull/6352)
   Fixes vector-im/element-web#17782
 * Fix EventIndex double handling events and erroring
   [\#6385](https://github.com/matrix-org/matrix-react-sdk/pull/6385)
   Fixes vector-im/element-web#18008
 * Improve reply rendering
   [\#3553](https://github.com/matrix-org/matrix-react-sdk/pull/3553)
   Fixes vector-im/riot-web#9217, vector-im/riot-web#7633, vector-im/riot-web#7530, vector-im/riot-web#7169, vector-im/riot-web#7151, vector-im/riot-web#6692 vector-im/riot-web#6579 and vector-im/element-web#17440

## 🐛 Bug Fixes
 * Fix browser history getting stuck looping back to the same room
   [\#18053](https://github.com/vector-im/element-web/pull/18053)
 * Fix space shortcuts on layouts with non-English keys in the places of numbers
   [\#17780](https://github.com/vector-im/element-web/pull/17780)
   Fixes vector-im/element-web#17776
 * Fix CreateRoomDialog exploding when making public room outside of a space
   [\#6493](https://github.com/matrix-org/matrix-react-sdk/pull/6493)
 * Fix regression where registration would soft-crash on captcha
   [\#6505](https://github.com/matrix-org/matrix-react-sdk/pull/6505)
   Fixes vector-im/element-web#18284
 * only send join rule event if we have a join rule to put in it
   [\#6517](https://github.com/matrix-org/matrix-react-sdk/pull/6517)
 * Improve the new download button's discoverability and interactions.
   [\#6510](https://github.com/matrix-org/matrix-react-sdk/pull/6510)
 * Fix voice recording UI looking broken while microphone permissions are being requested.
   [\#6479](https://github.com/matrix-org/matrix-react-sdk/pull/6479)
   Fixes vector-im/element-web#18223
 * Match colors of room and user avatars in DMs
   [\#6393](https://github.com/matrix-org/matrix-react-sdk/pull/6393)
   Fixes vector-im/element-web#2449
 * Fix onPaste handler to work with copying files from Finder
   [\#5389](https://github.com/matrix-org/matrix-react-sdk/pull/5389)
   Fixes vector-im/element-web#15536 and vector-im/element-web#16255
 * Fix infinite pagination loop when offline
   [\#6478](https://github.com/matrix-org/matrix-react-sdk/pull/6478)
   Fixes vector-im/element-web#18242
 * Fix blurhash rounded corners missing regression
   [\#6467](https://github.com/matrix-org/matrix-react-sdk/pull/6467)
   Fixes vector-im/element-web#18110
 * Fix position of the space hierarchy spinner
   [\#6462](https://github.com/matrix-org/matrix-react-sdk/pull/6462)
   Fixes vector-im/element-web#18182
 * Fix display of image messages that lack thumbnails
   [\#6456](https://github.com/matrix-org/matrix-react-sdk/pull/6456)
   Fixes vector-im/element-web#18175
 * Fix crash with large audio files.
   [\#6436](https://github.com/matrix-org/matrix-react-sdk/pull/6436)
   Fixes vector-im/element-web#18149
 * Make diff colors in codeblocks more pleasant
   [\#6355](https://github.com/matrix-org/matrix-react-sdk/pull/6355)
   Fixes vector-im/element-web#17939
 * Show the correct audio file duration while loading the file.
   [\#6435](https://github.com/matrix-org/matrix-react-sdk/pull/6435)
   Fixes vector-im/element-web#18160
 * Fix various timeline settings not applying immediately.
   [\#6261](https://github.com/matrix-org/matrix-react-sdk/pull/6261)
   Fixes vector-im/element-web#17748
 * Fix issues with room list duplication
   [\#6391](https://github.com/matrix-org/matrix-react-sdk/pull/6391)
   Fixes vector-im/element-web#14508
 * Fix grecaptcha throwing useless error sometimes
   [\#6401](https://github.com/matrix-org/matrix-react-sdk/pull/6401)
   Fixes vector-im/element-web#15142
 * Update Emojibase and Twemoji and switch to IamCal (Slack-style) shortcodes
   [\#6347](https://github.com/matrix-org/matrix-react-sdk/pull/6347)
   Fixes vector-im/element-web#13857 and vector-im/element-web#13334
 * Respect compound emojis in default avatar initial generation
   [\#6397](https://github.com/matrix-org/matrix-react-sdk/pull/6397)
   Fixes vector-im/element-web#18040
 * Fix bug where the 'other homeserver' field in the server selection dialog would become briefly focus and then unfocus when clicked.
   [\#6394](https://github.com/matrix-org/matrix-react-sdk/pull/6394)
   Fixes vector-im/element-web#18031
 * Standardise spelling and casing of homeserver, identity server, and integration manager 
   [\#6365](https://github.com/matrix-org/matrix-react-sdk/pull/6365)
 * Fix widgets not receiving decrypted events when they have permission.
   [\#6371](https://github.com/matrix-org/matrix-react-sdk/pull/6371)
   Fixes vector-im/element-web#17615
 * Prevent client hangs when calculating blurhashes
   [\#6366](https://github.com/matrix-org/matrix-react-sdk/pull/6366)
   Fixes vector-im/element-web#17945
 * Exclude state events from widgets reading room events
   [\#6378](https://github.com/matrix-org/matrix-react-sdk/pull/6378)
 * Cache feature_spaces\* flags to improve performance
   [\#6381](https://github.com/matrix-org/matrix-react-sdk/pull/6381)

Changes in [1.7.33](https://github.com/vector-im/element-desktop/releases/tag/v1.7.33) (2021-07-19)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.32...v1.7.33)

 * Translations update from Weblate
   [\#232](https://github.com/vector-im/element-desktop/pull/232)
 * Add VS Code to gitignore
   [\#231](https://github.com/vector-im/element-desktop/pull/231)
 * Use the target-specific build dir for sqlcipher / openssl
   [\#230](https://github.com/vector-im/element-desktop/pull/230)
 * Fix not specifying a target
   [\#229](https://github.com/vector-im/element-desktop/pull/229)
 * Do not generate a lockfile when running in CI
   [\#227](https://github.com/vector-im/element-desktop/pull/227)
 * Use double quotes in readme
   [\#228](https://github.com/vector-im/element-desktop/pull/228)
 * Support universal builds
   [\#226](https://github.com/vector-im/element-desktop/pull/226)
 * Check target with rustc directly
   [\#225](https://github.com/vector-im/element-desktop/pull/225)

Changes in [1.7.32](https://github.com/vector-im/element-desktop/releases/tag/v1.7.32) (2021-07-05)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.31...v1.7.32)

 * Fix the build: make the rootDir correct
   [\#224](https://github.com/vector-im/element-desktop/pull/224)
 * Fix i18n in Element Desktop
   [\#223](https://github.com/vector-im/element-desktop/pull/223)
 * Convert preload.js to Typescript so that it gets copied to `lib`
   [\#222](https://github.com/vector-im/element-desktop/pull/222)
 * Bundle the `lib` dir now, not `src`
   [\#221](https://github.com/vector-im/element-desktop/pull/221)
 * Initial Typescripting for Element Desktop
   [\#219](https://github.com/vector-im/element-desktop/pull/219)
 * Translations update from Weblate
   [\#220](https://github.com/vector-im/element-desktop/pull/220)
 * Fix Windows target arch in native build
   [\#218](https://github.com/vector-im/element-desktop/pull/218)
 * Add libera.chat to default room directory
   [\#217](https://github.com/vector-im/element-desktop/pull/217)
 * Add update and native build support for Apple silicon
   [\#216](https://github.com/vector-im/element-desktop/pull/216)
 * Add numpad accelerators for zooming
   [\#203](https://github.com/vector-im/element-desktop/pull/203)
 * Add warning dialog when custom config.json is invalid
   [\#201](https://github.com/vector-im/element-desktop/pull/201)
 * Don't show Quit warning on keyUp residual event
   [\#215](https://github.com/vector-im/element-desktop/pull/215)
 * Fix accelerator for save-image-as clashing with copy-link-address
   [\#213](https://github.com/vector-im/element-desktop/pull/213)

Changes in [1.7.31](https://github.com/vector-im/element-desktop/releases/tag/v1.7.31) (2021-06-21)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.31-rc.1...v1.7.31)

 * No changes since rc.1

Changes in [1.7.31-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.31-rc.1) (2021-06-15)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.30...v1.7.31-rc.1)

 * Upgrade to Electron 12.0.11
   [\#211](https://github.com/vector-im/element-desktop/pull/211)
 * Translations update from Weblate
   [\#214](https://github.com/vector-im/element-desktop/pull/214)
 * Upgrade to Node 14
   [\#212](https://github.com/vector-im/element-desktop/pull/212)
 * Bump npm-registry-fetch from 4.0.2 to 4.0.7
   [\#210](https://github.com/vector-im/element-desktop/pull/210)
 * Update electron-builder for Node 16 compatibility
   [\#204](https://github.com/vector-im/element-desktop/pull/204)
 * Bump hosted-git-info from 2.8.5 to 2.8.9
   [\#209](https://github.com/vector-im/element-desktop/pull/209)
 * Bump glob-parent from 5.1.1 to 5.1.2
   [\#206](https://github.com/vector-im/element-desktop/pull/206)
 * Bump dot-prop from 4.2.0 to 4.2.1
   [\#208](https://github.com/vector-im/element-desktop/pull/208)
 * Bump y18n from 3.2.1 to 3.2.2
   [\#207](https://github.com/vector-im/element-desktop/pull/207)
 * Bump normalize-url from 4.5.0 to 4.5.1
   [\#205](https://github.com/vector-im/element-desktop/pull/205)
 * Put Preferences menu item in correct location on macOS
   [\#200](https://github.com/vector-im/element-desktop/pull/200)
 * Switch zoomIn accelerator to default
   [\#202](https://github.com/vector-im/element-desktop/pull/202)

Changes in [1.7.30](https://github.com/vector-im/element-desktop/releases/tag/v1.7.30) (2021-06-07)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.30-rc.1...v1.7.30)

 * No changes since rc.1

Changes in [1.7.30-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.30-rc.1) (2021-06-01)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.29...v1.7.30-rc.1)

 * Translations update from Weblate
   [\#199](https://github.com/vector-im/element-desktop/pull/199)
 * Migrate to `eslint-plugin-matrix-org`
   [\#197](https://github.com/vector-im/element-desktop/pull/197)
 * Upgrade to Electron 12.0.9
   [\#198](https://github.com/vector-im/element-desktop/pull/198)

Changes in [1.7.29](https://github.com/vector-im/element-desktop/releases/tag/v1.7.29) (2021-05-24)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.29-rc.1...v1.7.29)

 * No changes since rc.1

Changes in [1.7.29-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.29-rc.1) (2021-05-19)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.28...v1.7.29-rc.1)

 * Translations update from Weblate
   [\#196](https://github.com/vector-im/element-desktop/pull/196)
 * Translations update from Weblate
   [\#195](https://github.com/vector-im/element-desktop/pull/195)

Changes in [1.7.28](https://github.com/vector-im/element-desktop/releases/tag/v1.7.28) (2021-05-17)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.28-rc.1...v1.7.28)

 * No changes since rc.1

Changes in [1.7.28-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.28-rc.1) (2021-05-11)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.27...v1.7.28-rc.1)

 * Add Windows native module requirements
   [\#190](https://github.com/vector-im/element-desktop/pull/190)
 * Prevent black screen when closing window while in full screen mode on macOS
   [\#192](https://github.com/vector-im/element-desktop/pull/192)

Changes in [1.7.27](https://github.com/vector-im/element-desktop/releases/tag/v1.7.27) (2021-05-10)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.27-rc.1...v1.7.27)

 * No changes since rc.1

Changes in [1.7.27-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.27-rc.1) (2021-05-04)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.26...v1.7.27-rc.1)

 * Translations update from Weblate
   [\#191](https://github.com/vector-im/element-desktop/pull/191)
 * Bump ssri from 6.0.1 to 6.0.2
   [\#187](https://github.com/vector-im/element-desktop/pull/187)
 * Disables HardwareMediaKeyHandling
   [\#180](https://github.com/vector-im/element-desktop/pull/180)
 * Translations update from Weblate
   [\#189](https://github.com/vector-im/element-desktop/pull/189)
 * Add internationalisation support
   [\#188](https://github.com/vector-im/element-desktop/pull/188)
 * Fix event index passphrase change process
   [\#186](https://github.com/vector-im/element-desktop/pull/186)

Changes in [1.7.26](https://github.com/vector-im/element-desktop/releases/tag/v1.7.26) (2021-04-26)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.26-rc.1...v1.7.26)

 * No changes since rc.1

Changes in [1.7.26-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.26-rc.1) (2021-04-21)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.25...v1.7.26-rc.1)

 * Remove Debian dependency libappindicator3-1
   [\#170](https://github.com/vector-im/element-desktop/pull/170)
 * Fix exit shortcuts for non QWERTY keyboards
   [\#185](https://github.com/vector-im/element-desktop/pull/185)
 * Fix using yarn run fetch with a specific version
   [\#182](https://github.com/vector-im/element-desktop/pull/182)
 * Switch nightly to not-staging Scalar by default
   [\#181](https://github.com/vector-im/element-desktop/pull/181)

Changes in [1.7.25](https://github.com/vector-im/element-desktop/releases/tag/v1.7.25) (2021-04-12)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.25-rc.1...v1.7.25)

 * No changes since rc.1

Changes in [1.7.25-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.25-rc.1) (2021-04-07)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.24...v1.7.25-rc.1)

 * Fix disabling spellchecker
   [\#179](https://github.com/vector-im/element-desktop/pull/179)
 * Upgrade to Electron 12.0.2
   [\#178](https://github.com/vector-im/element-desktop/pull/178)
 * Avoid exit listener to hijack other application shortcuts
   [\#177](https://github.com/vector-im/element-desktop/pull/177)
 * Migrate native-node-modules docs to element-desktop
   [\#176](https://github.com/vector-im/element-desktop/pull/176)
 * Add prompt to warn before quitting the application
   [\#173](https://github.com/vector-im/element-desktop/pull/173)
 * Upgrade to Electron 11.4.1
   [\#172](https://github.com/vector-im/element-desktop/pull/172)
 * Fix docker:build:native documentation typo
   [\#174](https://github.com/vector-im/element-desktop/pull/174)

Changes in [1.7.24](https://github.com/vector-im/element-desktop/releases/tag/v1.7.24) (2021-03-29)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.24-rc.1...v1.7.24)

 * No changes since rc.1

Changes in [1.7.24-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.24-rc.1) (2021-03-25)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.23...v1.7.24-rc.1)

 * No changes since 1.7.23

Changes in [1.7.23](https://github.com/vector-im/element-desktop/releases/tag/v1.7.23) (2021-03-15)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.23-rc.1...v1.7.23)

 * No changes since rc.1

Changes in [1.7.23-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.23-rc.1) (2021-03-11)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.22...v1.7.23-rc.1)

 * Fix disabling spell-checker
   [\#171](https://github.com/vector-im/element-desktop/pull/171)
 * Add multi language spell check
   [\#154](https://github.com/vector-im/element-desktop/pull/154)

Changes in [1.7.22](https://github.com/vector-im/element-desktop/releases/tag/v1.7.22) (2021-03-01)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.22-rc.1...v1.7.22)

 * No changes since rc.1

Changes in [1.7.22-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.22-rc.1) (2021-02-24)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.21...v1.7.22-rc.1)

 * Disable Countly
   [\#169](https://github.com/vector-im/element-desktop/pull/169)
 * Upgrade to Electron 11.2.3
   [\#168](https://github.com/vector-im/element-desktop/pull/168)

Changes in [1.7.21](https://github.com/vector-im/element-desktop/releases/tag/v1.7.21) (2021-02-16)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.21-rc.1...v1.7.21)

 * No changes since rc.1

Changes in [1.7.21-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.21-rc.1) (2021-02-10)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.20...v1.7.21-rc.1)

 * Fix desktop Matrix screen sharing
   [\#161](https://github.com/vector-im/element-desktop/pull/161)

Changes in [1.7.20](https://github.com/vector-im/element-desktop/releases/tag/v1.7.20) (2021-02-04)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.19...v1.7.20)

 * No changes since 1.7.19

Changes in [1.7.19](https://github.com/vector-im/element-desktop/releases/tag/v1.7.19) (2021-02-03)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.19-rc.1...v1.7.19)

 * No changes since rc.1

Changes in [1.7.19-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.19-rc.1) (2021-01-29)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.18...v1.7.19-rc.1)

 * Remove Buildkite pipeline file
   [\#167](https://github.com/vector-im/element-desktop/pull/167)
 * Upgrade deps 2021-01-18
   [\#166](https://github.com/vector-im/element-desktop/pull/166)
 * package: Bump our seshat version
   [\#164](https://github.com/vector-im/element-desktop/pull/164)
 * Enable context isolation, bridge expected IPC
   [\#163](https://github.com/vector-im/element-desktop/pull/163)

Changes in [1.7.18](https://github.com/vector-im/element-desktop/releases/tag/v1.7.18) (2021-01-26)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.17...v1.7.18)

 * No changes since 1.7.17

Changes in [1.7.17](https://github.com/vector-im/element-desktop/releases/tag/v1.7.17) (2021-01-18)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.17-rc.1...v1.7.17)

 * [Release] package: Bump our seshat version
   [\#165](https://github.com/vector-im/element-desktop/pull/165)

Changes in [1.7.17-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.17-rc.1) (2021-01-13)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.16...v1.7.17-rc.1)

 * package: Bump our Seshat version
   [\#162](https://github.com/vector-im/element-desktop/pull/162)
 * Upgrade to Electron 10.2.0
   [\#159](https://github.com/vector-im/element-desktop/pull/159)

Changes in [1.7.16](https://github.com/vector-im/element-desktop/releases/tag/v1.7.16) (2020-12-21)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.16-rc.1...v1.7.16)

 * No changes since rc.1

Changes in [1.7.16-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.16-rc.1) (2020-12-16)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.15...v1.7.16-rc.1)

 * Bump ini from 1.3.5 to 1.3.8
   [\#158](https://github.com/vector-im/element-desktop/pull/158)
 * Add gitter.im to room directory
   [\#157](https://github.com/vector-im/element-desktop/pull/157)

Changes in [1.7.15](https://github.com/vector-im/element-desktop/releases/tag/v1.7.15) (2020-12-07)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.15-rc.1...v1.7.15)

 * No changes since rc.1

Changes in [1.7.15-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.15-rc.1) (2020-12-02)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.14...v1.7.15-rc.1)

 * No changes since 1.7.14

Changes in [1.7.14](https://github.com/vector-im/element-desktop/releases/tag/v1.7.14) (2020-11-23)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.14-rc.1...v1.7.14)

 * No changes since rc.1

Changes in [1.7.14-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.14-rc.1) (2020-11-18)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.13...v1.7.14-rc.1)

 * Correct spelling mistakes
   [\#151](https://github.com/vector-im/element-desktop/pull/151)

Changes in [1.7.13](https://github.com/vector-im/element-desktop/releases/tag/v1.7.13) (2020-11-09)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.13-rc.1...v1.7.13)

 * No changes since rc.1

Changes in [1.7.13-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.13-rc.1) (2020-11-04)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.12...v1.7.13-rc.1)

 * Add countly experiment to develop/nightly configs
   [\#150](https://github.com/vector-im/element-desktop/pull/150)

Changes in [1.7.12](https://github.com/vector-im/element-desktop/releases/tag/v1.7.12) (2020-10-28)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.11...v1.7.12)

 * No changes since 1.7.11

Changes in [1.7.11](https://github.com/vector-im/element-desktop/releases/tag/v1.7.11) (2020-10-26)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.11-rc.1...v1.7.11)

 * No changes since rc.1

Changes in [1.7.11-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.11-rc.1) (2020-10-21)
=============================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.10...v1.7.11-rc.1)

 * Bump npm-user-validate from 1.0.0 to 1.0.1
   [\#148](https://github.com/vector-im/element-desktop/pull/148)
 * Use keytar for the seshat passphrase.
   [\#147](https://github.com/vector-im/element-desktop/pull/147)
 * Upgrade to Electron 10.1.3
   [\#146](https://github.com/vector-im/element-desktop/pull/146)

Changes in [1.7.10](https://github.com/vector-im/element-desktop/releases/tag/v1.7.10) (2020-10-20)
===================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.9...v1.7.10)

 * No changes since 1.7.9

Changes in [1.7.9](https://github.com/vector-im/element-desktop/releases/tag/v1.7.9) (2020-10-12)
=================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.9-rc.1...v1.7.9)

 * No changes since rc.1

Changes in [1.7.9-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.9-rc.1) (2020-10-07)
===========================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.8...v1.7.9-rc.1)

 * package.json: Bump the seshat version.
   [\#145](https://github.com/vector-im/element-desktop/pull/145)
 * Explicitly depend on `request` as webcontents-handler requires it
   [\#144](https://github.com/vector-im/element-desktop/pull/144)
 * Upgrade png-to-ico
   [\#143](https://github.com/vector-im/element-desktop/pull/143)
 * Point 'new issue' link at issue-type choice page
   [\#142](https://github.com/vector-im/element-desktop/pull/142)

Changes in [1.7.8](https://github.com/vector-im/element-desktop/releases/tag/v1.7.8) (2020-09-28)
=================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.8-rc.1...v1.7.8)

 * No changes since rc.1

Changes in [1.7.8-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.8-rc.1) (2020-09-23)
===========================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.7...v1.7.8-rc.1)

 * Fix neon error by upgrading Seshat
   [\#141](https://github.com/vector-im/element-desktop/pull/141)
 * Upgrade to Electron 10.1.1
   [\#140](https://github.com/vector-im/element-desktop/pull/140)

Changes in [1.7.7](https://github.com/vector-im/element-desktop/releases/tag/v1.7.7) (2020-09-14)
=================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.6...v1.7.7)

 * No changes since 1.7.6

Changes in [1.7.6](https://github.com/vector-im/element-desktop/releases/tag/v1.7.6) (2020-09-14)
=================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.6-rc.1...v1.7.6)

 * No changes since rc.1

Changes in [1.7.6-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.6-rc.1) (2020-09-09)
===========================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.5...v1.7.6-rc.1)

 * Update to Element pipeline name
   [\#139](https://github.com/vector-im/element-desktop/pull/139)
 * Bump bl from 4.0.2 to 4.0.3
   [\#137](https://github.com/vector-im/element-desktop/pull/137)

Changes in [1.7.5](https://github.com/vector-im/element-desktop/releases/tag/v1.7.5) (2020-09-01)
=================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.5-rc.1...v1.7.5)

 * No changes since 1.7.5-rc.1

Changes in [1.7.5-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.5-rc.1) (2020-08-26)
===========================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.4...v1.7.5-rc.1)

 * Settings v3: Update configs for new feature flag behaviour
   [\#135](https://github.com/vector-im/element-desktop/pull/135)
 * Add reaction preview labs flags to nightly
   [\#134](https://github.com/vector-im/element-desktop/pull/134)

Changes in [1.7.4](https://github.com/vector-im/element-desktop/releases/tag/v1.7.4) (2020-08-17)
=================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.4-rc.1...v1.7.4)

 * No changes since 1.7.4-rc.1

Changes in [1.7.4-rc.1](https://github.com/vector-im/element-desktop/releases/tag/v1.7.4-rc.1) (2020-08-13)
===========================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.3...v1.7.4-rc.1)

 * Update policy links to element.io
   [\#132](https://github.com/vector-im/element-desktop/pull/132)
 * Update bug report submission URL
   [\#131](https://github.com/vector-im/element-desktop/pull/131)
 * Update code signing cert for Windows
   [\#130](https://github.com/vector-im/element-desktop/pull/130)
 * Replace Riot with Element in docs and comments
   [\#129](https://github.com/vector-im/element-desktop/pull/129)
 * Fix order of README steps
   [\#128](https://github.com/vector-im/element-desktop/pull/128)
 * Upgrade to Electron 9.1.2
   [\#127](https://github.com/vector-im/element-desktop/pull/127)

Changes in [1.7.3](https://github.com/vector-im/element-desktop/releases/tag/v1.7.3) (2020-08-05)
=================================================================================================
[Full Changelog](https://github.com/vector-im/element-desktop/compare/v1.7.3-rc.1...v1.7.3)

 * No changes since 1.7.3-rc.1

Changes in [1.7.3-rc.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.7.3-rc.1) (2020-07-31)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.7.2...v1.7.3-rc.1)

 * Clean up linting
   [\#126](https://github.com/vector-im/riot-desktop/pull/126)
 * Update renaming workaround for 'Element' name
   [\#125](https://github.com/vector-im/riot-desktop/pull/125)

Changes in [1.7.2](https://github.com/vector-im/riot-desktop/releases/tag/v1.7.2) (2020-07-27)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.7.1...v1.7.2)

 * Catch exceptions from main method in fetch script
   [\#124](https://github.com/vector-im/riot-desktop/pull/124)
 * Use new eslint package
   [\#122](https://github.com/vector-im/riot-desktop/pull/122)
 * Remove ' (Riot)' from app name
   [\#123](https://github.com/vector-im/riot-desktop/pull/123)

Changes in [1.7.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.7.1) (2020-07-16)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.7.0...v1.7.1)

 * Bump lodash from 4.17.15 to 4.17.19
   [\#121](https://github.com/vector-im/riot-desktop/pull/121)
 * Don't forget nightly when computing userData path
   [\#120](https://github.com/vector-im/riot-desktop/pull/120)
 * Fix hosting link
   [\#119](https://github.com/vector-im/riot-desktop/pull/119)
 * New macOS icon
   [\#117](https://github.com/vector-im/riot-desktop/pull/117)
 * Update README.md
   [\#118](https://github.com/vector-im/riot-desktop/pull/118)
 * More icon updates
   [\#115](https://github.com/vector-im/riot-desktop/pull/115)
 * Don't forget to yarn install
   [\#114](https://github.com/vector-im/riot-desktop/pull/114)

Changes in [1.7.0](https://github.com/vector-im/riot-desktop/releases/tag/v1.7.0) (2020-07-15)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.8...v1.7.0)

 * Fix lint error
   [\#113](https://github.com/vector-im/riot-desktop/pull/113)
 * Delabs font-scaling
   [\#112](https://github.com/vector-im/riot-desktop/pull/112)
 * Remove room list labs flag from config
   [\#109](https://github.com/vector-im/riot-desktop/pull/109)
 * Remove the irc layout setting from labs
   [\#111](https://github.com/vector-im/riot-desktop/pull/111)
 * Update npm to ^6.14.6
   [\#108](https://github.com/vector-im/riot-desktop/pull/108)

Changes in [1.6.8](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.8) (2020-07-03)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.8-rc.1...v1.6.8)

 * No changes since rc.1

Changes in [1.6.8-rc.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.8-rc.1) (2020-07-01)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.7...v1.6.8-rc.1)

 * Show expiring toast on completed downloads to prompt user to open
   [\#106](https://github.com/vector-im/riot-desktop/pull/106)
 * Upgrade to Electron 9.0.5
   [\#107](https://github.com/vector-im/riot-desktop/pull/107)
 * Add new spinner labs option to config.json
   [\#105](https://github.com/vector-im/riot-desktop/pull/105)
 * electron-main: Skip the reindex if we're going to delete the db anyways.
   [\#104](https://github.com/vector-im/riot-desktop/pull/104)
 * riot-desktop: Bump the required seshat version.
   [\#103](https://github.com/vector-im/riot-desktop/pull/103)
 * main: Add an event index IPC method to check if a room is being indexed.
   [\#100](https://github.com/vector-im/riot-desktop/pull/100)
 * electron-main: Add support to set and get the user version.
   [\#102](https://github.com/vector-im/riot-desktop/pull/102)
 * Upgrade to Electron 9
   [\#94](https://github.com/vector-im/riot-desktop/pull/94)

Changes in [1.6.7](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.7) (2020-06-29)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.6...v1.6.7)

 * No changes since 1.6.6

Changes in [1.6.6](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.6) (2020-06-23)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.6-rc.1...v1.6.6)

 * No changes since rc.1

Changes in [1.6.6-rc.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.6-rc.1) (2020-06-17)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.5...v1.6.6-rc.1)

 * Upgrade needle to avoid bugs with modern Node
   [\#101](https://github.com/vector-im/riot-desktop/pull/101)
 * Fix riot-desktop manual update check getting stuck on Downloading...
   [\#99](https://github.com/vector-im/riot-desktop/pull/99)
 * Electron recall latest downloaded update for when the user manually asks
   [\#98](https://github.com/vector-im/riot-desktop/pull/98)
 * use keytar to store pickle keys
   [\#95](https://github.com/vector-im/riot-desktop/pull/95)

Changes in [1.6.5](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.5) (2020-06-16)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.4...v1.6.5)

 * No changes since 1.6.4

Changes in [1.6.4](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.4) (2020-06-05)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.3...v1.6.4)

 * No changes since 1.6.3

Changes in [1.6.3](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.3) (2020-06-04)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.3-rc.1...v1.6.3)

 * No changes since rc.1

Changes in [1.6.3-rc.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.3-rc.1) (2020-06-02)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.2...v1.6.3-rc.1)

 * Fix electron context menu copy/save-as
   [\#96](https://github.com/vector-im/riot-desktop/pull/96)
 * Fixed error in README.md/User-specified config.json
   [\#97](https://github.com/vector-im/riot-desktop/pull/97)
 * Update Modular hosting link
   [\#92](https://github.com/vector-im/riot-desktop/pull/92)
 * Enforce sandbox on all spawned BrowserWindow objects
   [\#91](https://github.com/vector-im/riot-desktop/pull/91)
 * Run before-quit on updates too to flush rageshake
   [\#93](https://github.com/vector-im/riot-desktop/pull/93)
 * Enable new room list labs flag
   [\#87](https://github.com/vector-im/riot-desktop/pull/87)
 * Add asar-webapp script
   [\#59](https://github.com/vector-im/riot-desktop/pull/59)
 * Bump acorn from 6.4.0 to 6.4.1
   [\#50](https://github.com/vector-im/riot-desktop/pull/50)
 * Enable font scaling flag for nightly
   [\#89](https://github.com/vector-im/riot-desktop/pull/89)
 * Enable IRC UI labs flag in nightly
   [\#88](https://github.com/vector-im/riot-desktop/pull/88)
 * Update help message to fix broken url to electron docs
   [\#86](https://github.com/vector-im/riot-desktop/pull/86)

Changes in [1.6.2](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.2) (2020-05-22)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.1...v1.6.2)

 * No changes since 1.6.2

Changes in [1.6.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.1) (2020-05-19)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.1-rc.1...v1.6.1)

 * No changes since rc.1

Changes in [1.6.1-rc.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.1-rc.1) (2020-05-14)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.0...v1.6.1-rc.1)

 * Add CI scripts to install and link JS SDK
   [\#85](https://github.com/vector-im/riot-desktop/pull/85)
 * Use Xenial as the build image's base distribution
   [\#84](https://github.com/vector-im/riot-desktop/pull/84)
 * Persist GPG keys for Linux builds via Docker
   [\#83](https://github.com/vector-im/riot-desktop/pull/83)
 * Update README to mention profile support
   [\#81](https://github.com/vector-im/riot-desktop/pull/81)
 * Remove Conflicts from riot-desktop
   [\#82](https://github.com/vector-im/riot-desktop/pull/82)
 * Add a default Linux distribution
   [\#79](https://github.com/vector-im/riot-desktop/pull/79)
 * Remove invite only padlocks feature flag config
   [\#77](https://github.com/vector-im/riot-desktop/pull/77)
 * package.json: Bump the Seshat dep.
   [\#75](https://github.com/vector-im/riot-desktop/pull/75)
 * Remove encrypted message search feature flag
   [\#74](https://github.com/vector-im/riot-desktop/pull/74)
 * Update readme now it's the real source
   [\#73](https://github.com/vector-im/riot-desktop/pull/73)

Changes in [1.6.0](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.0) (2020-05-05)
==============================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.0-rc.6...v1.6.0)

 * No changes since rc.6

Changes in [1.6.0-rc.6](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.0-rc.6) (2020-05-01)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.0-rc.5...v1.6.0-rc.6)

 * No changes since rc.5

Changes in [1.6.0-rc.5](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.0-rc.5) (2020-04-30)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.0-rc.4...v1.6.0-rc.5)

 * Remove feature flag docs from docs on release
   [\#78](https://github.com/vector-im/riot-desktop/pull/78)
 * package.json: Bump the Seshat dep.
   [\#76](https://github.com/vector-im/riot-desktop/pull/76)

Changes in [1.6.0-rc.4](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.0-rc.4) (2020-04-23)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.0-rc.3...v1.6.0-rc.4)

 * No changes since rc.3

Changes in [1.6.0-rc.3](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.0-rc.3) (2020-04-17)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.0-rc.2...v1.6.0-rc.3)

 * widen search paths / fix vector-im/riot-web#13190 [to release]
   [\#72](https://github.com/vector-im/riot-desktop/pull/72)

Changes in [1.6.0-rc.2](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.0-rc.2) (2020-04-16)
========================================================================================================
[Full Changelog](https://github.com/vector-im/riot-desktop/compare/v1.6.0-rc.1...v1.6.0-rc.2)

 * No changes since rc.1

Changes in [1.6.0-rc.1](https://github.com/vector-im/riot-desktop/releases/tag/v1.6.0-rc.1) (2020-04-15)
========================================================================================================

 * Enable cross-signing / E2EE by default for DM on release
   [\#70](https://github.com/vector-im/riot-desktop/pull/70)
 * Add a release script
   [\#69](https://github.com/vector-im/riot-desktop/pull/69)
 * Fix Electron SSO handling to support multiple profiles
   [\#67](https://github.com/vector-im/riot-desktop/pull/67)
 * Add riot-desktop shortcuts for forward/back matching browsers&slack
   [\#68](https://github.com/vector-im/riot-desktop/pull/68)
 * package.json: Bump the Seshat version.
   [\#66](https://github.com/vector-im/riot-desktop/pull/66)
 * Bump minimist from 1.2.2 to 1.2.3
   [\#64](https://github.com/vector-im/riot-desktop/pull/64)
 * Add cfg to access the hak.json
   [\#65](https://github.com/vector-im/riot-desktop/pull/65)
 * Extract dep versions out to hak.json
   [\#63](https://github.com/vector-im/riot-desktop/pull/63)
 * Make the openssl version a variable
   [\#62](https://github.com/vector-im/riot-desktop/pull/62)
 * Update openssl
   [\#61](https://github.com/vector-im/riot-desktop/pull/61)
 * Fix spellcheck language fallback algorithm
   [\#60](https://github.com/vector-im/riot-desktop/pull/60)
 * package.json: Bump the required Seshat version.
   [\#57](https://github.com/vector-im/riot-desktop/pull/57)
 * Remove welcome user from config
   [\#56](https://github.com/vector-im/riot-desktop/pull/56)
 * electron-main: Immediately set the eventIndex variable to null when
   closing.
   [\#55](https://github.com/vector-im/riot-desktop/pull/55)
 * Enable Seshat on Nightly
   [\#54](https://github.com/vector-im/riot-desktop/pull/54)
 * Register Mac electron specific Cmd+, shortcut to User Settings
   [\#53](https://github.com/vector-im/riot-desktop/pull/53)
 * Bump minimist from 1.2.0 to 1.2.2
   [\#52](https://github.com/vector-im/riot-desktop/pull/52)
 * package.json: Bump the required Seshat version.
   [\#51](https://github.com/vector-im/riot-desktop/pull/51)
 * Updates for Seshat 1.2.0 (not yet released) and support to delete events
   from the index.
   [\#47](https://github.com/vector-im/riot-desktop/pull/47)
 * Add custom themes labs flag
   [\#49](https://github.com/vector-im/riot-desktop/pull/49)
 * Get the app ID from the cintext
   [\#46](https://github.com/vector-im/riot-desktop/pull/46)
 * Electron 8 changes. Deprecations. Updates.
   [\#38](https://github.com/vector-im/riot-desktop/pull/38)
 * Bump seshat dependency
   [\#45](https://github.com/vector-im/riot-desktop/pull/45)
 * Move deb control logic to builder
   [\#44](https://github.com/vector-im/riot-desktop/pull/44)
 * Add 'nightly' to brand too
   [\#43](https://github.com/vector-im/riot-desktop/pull/43)
 * Enable seshat in labs on nightly
   [\#42](https://github.com/vector-im/riot-desktop/pull/42)
 * Add config for Riot Nightly
   [\#41](https://github.com/vector-im/riot-desktop/pull/41)
 * Add a windows signing script
   [\#40](https://github.com/vector-im/riot-desktop/pull/40)
 * riot-desktop open SSO in browser so user doesn't have to auth twice
   [\#37](https://github.com/vector-im/riot-desktop/pull/37)
 * Remove the certificate config for windows
   [\#39](https://github.com/vector-im/riot-desktop/pull/39)
 * Missed an await
   [\#36](https://github.com/vector-im/riot-desktop/pull/36)
 * Exit with exit code on exception
   [\#35](https://github.com/vector-im/riot-desktop/pull/35)
 * Fix the set-version script
   [\#34](https://github.com/vector-im/riot-desktop/pull/34)
 * Pass through the env var we actually use to docker
   [\#33](https://github.com/vector-im/riot-desktop/pull/33)
 * Upgrade to electron 8.0.1 and implement spellchecking
   [\#30](https://github.com/vector-im/riot-desktop/pull/30)
 * Fix check script
   [\#31](https://github.com/vector-im/riot-desktop/pull/31)
 * Support fetching the latest develop build
   [\#29](https://github.com/vector-im/riot-desktop/pull/29)
 * Hopefully enable subpixel font rendering
   [\#28](https://github.com/vector-im/riot-desktop/pull/28)
 * Add our native modules separately into the files
   [\#27](https://github.com/vector-im/riot-desktop/pull/27)
 * Fix setversion script's yarn call on windows
   [\#26](https://github.com/vector-im/riot-desktop/pull/26)
 * Split 32/64 bit building
   [\#25](https://github.com/vector-im/riot-desktop/pull/25)
 * Build on 32 bit Windows
   [\#23](https://github.com/vector-im/riot-desktop/pull/23)
 * Build seshat on Linux
   [\#22](https://github.com/vector-im/riot-desktop/pull/22)
 * Native module builds: matrix-seshat for mac & win
   [\#21](https://github.com/vector-im/riot-desktop/pull/21)
 * Port desktop fixes
   [\#20](https://github.com/vector-im/riot-desktop/pull/20)
 * Add accelerators to context menu options like cut&paste in electron
   [\#19](https://github.com/vector-im/riot-desktop/pull/19)
 * Build the deb into a repo
   [\#18](https://github.com/vector-im/riot-desktop/pull/18)
 * Better Docker Support
   [\#17](https://github.com/vector-im/riot-desktop/pull/17)
 * Use a custom control file for the Debian package
   [\#14](https://github.com/vector-im/riot-desktop/pull/14)
 * Support config directories
   [\#15](https://github.com/vector-im/riot-desktop/pull/15)
 * Don't bail if we can't notarise
   [\#16](https://github.com/vector-im/riot-desktop/pull/16)
 * Set version automatically
   [\#13](https://github.com/vector-im/riot-desktop/pull/13)
 * Sign natively on Windows
   [\#12](https://github.com/vector-im/riot-desktop/pull/12)
 * Fix the linting errors
   [\#11](https://github.com/vector-im/riot-desktop/pull/11)
 * Electron API Updates
   [\#10](https://github.com/vector-im/riot-desktop/pull/10)
 * Package webapp into an asar archive
   [\#9](https://github.com/vector-im/riot-desktop/pull/9)
 * Sanitise scripts
   [\#8](https://github.com/vector-im/riot-desktop/pull/8)
 * Exit after importing key
   [\#6](https://github.com/vector-im/riot-desktop/pull/6)
 * Use portable mkdirp
   [\#5](https://github.com/vector-im/riot-desktop/pull/5)
 * Add explicit 'node' to scripts
   [\#4](https://github.com/vector-im/riot-desktop/pull/4)
 * Check properly
   [\#3](https://github.com/vector-im/riot-desktop/pull/3)
 * Add rimraf
   [\#2](https://github.com/vector-im/riot-desktop/pull/2)
 * Build electron app from pre-built tarball
   [\#1](https://github.com/vector-im/riot-desktop/pull/1)


