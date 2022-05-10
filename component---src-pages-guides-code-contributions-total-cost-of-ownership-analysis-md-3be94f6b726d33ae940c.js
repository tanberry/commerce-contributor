(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[799],{84551:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return u}});var n=a(22122),l=a(19756),m=(a(15007),a(64983)),d=a(99536),r=["components"],i={},o={_frontmatter:i},p=d.Z;function u(e){var t=e.components,a=(0,l.Z)(e,r);return(0,m.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"total-cost-of-ownership-tco-analysis"},"Total cost of ownership (TCO) analysis"),(0,m.mdx)("p",null,'All functional changes must be analyzed for the impact on merchant total cost of ownership (TCO) and the results of the analysis should be added to the pull request or issue description to meet the "Definition of Done" (DoD).'),(0,m.mdx)("p",null,"The goal of TCO analysis is to identify:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"If the changes have impact on TCO"),(0,m.mdx)("li",{parentName:"ul"},"The value of the impact, that consists of:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"The level of the change (patch/minor/major)"),(0,m.mdx)("li",{parentName:"ul"},"Potential number of affected extensions/customizations (several/many/most/all)")))),(0,m.mdx)("h2",{id:"changes-that-have-impact-tco"},"Changes that have impact TCO"),(0,m.mdx)("p",null,"Changes can impact total cost of ownership if the extensions or customizations, established processes or integrations within the projects build on Adobe Commerce framework may need to be adjusted to accommodate the changes."),(0,m.mdx)("p",null,"Some changes that have impact on TCO:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Result in SVC build failure on pull request"),(0,m.mdx)("li",{parentName:"ul"},"JavaScript changes (not covered by SVC build)",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Introduced or removed javascript events, classes, methods, properties or parameters"),(0,m.mdx)("li",{parentName:"ul"},"Changed javascript event ordering"))),(0,m.mdx)("li",{parentName:"ul"},"URL/Request changes",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed URL paths"),(0,m.mdx)("li",{parentName:"ul"},"Removed or introduced required or optional request parameters"))),(0,m.mdx)("li",{parentName:"ul"},"CLI commands changes",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Introduced or removed/renamed console commands, arguments or return codes"))),(0,m.mdx)("li",{parentName:"ul"},"Events changes",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed or added events and their arguments"))),(0,m.mdx)("li",{parentName:"ul"},"Removing, changing or adding default parameter values for methods"),(0,m.mdx)("li",{parentName:"ul"},"Removing or adding traits"),(0,m.mdx)("li",{parentName:"ul"},"Changing arguments or return value format of methods"),(0,m.mdx)("li",{parentName:"ul"},"Changing topics or consumers in message queue"),(0,m.mdx)("li",{parentName:"ul"},"Any layout or block changes"),(0,m.mdx)("li",{parentName:"ul"},"Removing or renaming of any files")),(0,m.mdx)("h2",{id:"level-of-change"},"Level of change"),(0,m.mdx)("p",null,"If the changes may have a TCO impact, the level of the change should be identified.\nIf the backward incompatible change results an a SVC build failure - the level of change can be viewed in the SVC build result.\nThis table lists the levels for the changes that are not currently covered by SVC:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Customization Point"),(0,m.mdx)("th",{parentName:"tr",align:null},"Code Change"),(0,m.mdx)("th",{parentName:"tr",align:null},"Level"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"JavaScript Class (marked with @api)"),(0,m.mdx)("td",{parentName:"tr",align:null},"New class"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New method added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New argument added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Class removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Method removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Argument removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New event"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Renamed event"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Removed event"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New event property"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Changed event property"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Removed event property"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Changed event ordering"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"URL Paths (Store-Front and Admin, GET)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Path removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Removed/renamed a request parameter"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New required request parameter"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New optional request parameter"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Console commands and their arguments"),(0,m.mdx)("td",{parentName:"tr",align:null},"Command removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New required argument"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New optional argument"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Removed/renamed argument"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New command exit code"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New command"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Events triggered by a component"),(0,m.mdx)("td",{parentName:"tr",align:null},"Event argument removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Event removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Event added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"PHP Interface (marked with @api)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Method parameter default value removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Method parameter default value changed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Method parameter default value added"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"PHP Class (marked with @api)"),(0,m.mdx)("td",{parentName:"tr",align:null},"Method argument or return value format changed (Example: before - ","[1, 2, 3]",", after - ['items' => ","[1,2,3]",", 'count' => 3])"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Trait removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Message queue"),(0,m.mdx)("td",{parentName:"tr",align:null},"Topic removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Consumer removed"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New topic published"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Layout handles declared by modules"),(0,m.mdx)("td",{parentName:"tr",align:null},"New layout page handle"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"New container/block added to handle"),(0,m.mdx)("td",{parentName:"tr",align:null},"MINOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Removed layout handle"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Static view files"),(0,m.mdx)("td",{parentName:"tr",align:null},"JS/CSS/LESS file removed/moved"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"GraphQL schema"),(0,m.mdx)("td",{parentName:"tr",align:null},"Removed type, field, argument, interface, directive, value, location"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Added required argument, input field, directive argument"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Changed kind of argument, type, field"),(0,m.mdx)("td",{parentName:"tr",align:null},"MAJOR")))),(0,m.mdx)("h2",{id:"potential-number-of-affected-customizations"},"Potential number of affected customizations"),(0,m.mdx)("p",null,"In order to identify the scope of the impact, usage of the changed code should be detected in the available code/extensions/customizations."),(0,m.mdx)("p",null,"The analysis result should indicate the proportion of reviewed modules to the modules referencing (using) the changed code."),(0,m.mdx)("h2",{id:"tco-analysis-result-example"},"TCO analysis result example"),(0,m.mdx)("p",null,'The analysis should indicate all the changes that have TCO impact or state that there is "No TCO impact".'),(0,m.mdx)("p",null,'For example, if the non-api "SomeClass::someMethod" was changed and the new required argument was added to the CLI command, the analysis result may look like:'),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-text"},"Changes have TCO impact.\nChange to SomeClass::someMethod is PATCH level but impacts 5 out of 10 reviewed custom modules.\nChange to CLI command is MAJOR level, it impacts 2 out of 10 reviewed custom modules.\n")),(0,m.mdx)("p",null,"A custom module is a ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/architecture/archi_perspectives/components/modules/mod_intro.html"},"module")," that is not part of the Adobe Commerce product.\nA change impacts a custom module if its code needs to be changed in response."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-code-contributions-total-cost-of-ownership-analysis-md-3be94f6b726d33ae940c.js.map