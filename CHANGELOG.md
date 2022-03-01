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

 * Security release with updated version of Olm to fix https://matrix.org/blog/2021/12/03/pre-disclosure-upcoming-security-release-of-libolm-and-matrix-js-sdk
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


