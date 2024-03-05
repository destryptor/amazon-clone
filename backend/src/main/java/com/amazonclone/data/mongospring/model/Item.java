package com.amazonclone.data.mongospring.model;

public class Item {
    private String link;
    private String name;

    public Item(String link, String name) {
        this.link = link;
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public String getName() {
        return name;
    }

}
