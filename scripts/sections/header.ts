# $('./body') {
#   insert_top("header", class: "_header") {
#     Move stuff here
#   }
# }

$(".//div[@id='Header']") {
	attribute("data-ur-set", "toggler")
	$("./div[@id='Logo']") {
		move_here("../../../div[@id='TopMenu']", "bottom"){
			remove(".//li[not(contains (@class, 'CartLink') or contains(@class, 'First'))]")
		}

		insert_after("div", class:"mw_header_bottom") {
			insert("div", class:"mw_search")
			insert("div", class:"mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
		}
	}
	$("..//div[@class='mw_search']") {
		move_here("//div[@id='SearchForm']", "bottom") {
			remove("./p")

			$("./form") {
				remove("./label")
				# $("./input[@type='image']") {
				# 	wrap("div", class: "mw_search_btn sprites-search")
				# }
				$("./input[@type='text']") {
					attribute("placeholder", "Search…")
				}
			}
		}
	}
	$$("li.CartLink") {
		add_class("sprites-cart")
	}
	$$("#TopMenu li.First") {
		add_class("sprites-user")
	}
}