package com.amazonclone.mongospring.model;

public class Item {
    private String name;
    private String link;

    public Item(String name, String link) {
        this.name = name;
        this.link = link;
    }

    public Item(String link) {
        this.link = link;
    }

    public String getName() {
        return name;
    }
    public String getLink() {
        return link;
    }
}
