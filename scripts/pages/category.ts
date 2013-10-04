# $("./body") {
#   add_class("_category")
#   $(".//div [contains(@class, 'NewsletterSubscription')]") {
#     remove()
#   }
#   $$("#Wrapper .Left") {
#     $("./div[@id='SideShopByBrand'] | ./div[@id='SideCategoryShopByPrice']") {
#       attribute("data-ur-set", "toggler")
#       $("./h2") {
#         attribute("data-ur-toggler-component", "button")
#         # add_class("mw_bar1")
#         insert("div", class: "mw_indicator")
#       }
#       $("./div") {
#         attribute("data-ur-toggler-component", "content")
#         $$("a") {
#           insert("div", class: "mw_arrow")
#         }
#       }
#     }
    
#   }
# }


$("./body") {
  add_class("_category")
   
  $("./div[@id='Container']") {
    $("./div[@id='Outer']") {
      $("./div[@id='Wrapper']") {
 
        $("./div[@class='Left']") {
          # Create Togglers
          $("./div[@id='SideShopByBrand'] | ./div[@id='SideCategoryShopByPrice'] | ./div[@id='SideCategoryList']") {
            attribute("data-ur-set", "toggler")
            $("./h2") {
              attribute("data-ur-toggler-component", "button")
              insert("div", class: "mw_indicator")
            }
            $("./div") {
              attribute("data-ur-toggler-component", "content")
              $(".//li/a") {
                insert("div", class:"mw_arrow")
              }
            }          
          }
 
          $(".//div[contains(@class, 'NewsletterSubscription')]") {
            remove()
          }
        }
 
        $("./div[@class='Content ']") {
          $("./div[@id='CategoryHeading']") {
            $("./div[@class='BlockContent']") {
              # Move page title on top of the content area
              $("./h2") {
                move_to("../../../../div[@class='Left']", "top")
              } 
              $("./div[@class='FloatRight SortBox']") {     
                $("./form") {
                  wrap_text_children("span")
                }       
              }
            }
          }
        }
        $(".//div[@id='CategoryBreadcrumb']"){
          remove()
        }

      }
      $(".//div[@id='Menu']") {
        remove()
      }
    }
  } 
}