# Generated by Django 2.0.6 on 2018-07-02 15:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=28)),
            ],
        ),
        migrations.AddField(
            model_name='contactform',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contact.Type'),
        ),
    ]
